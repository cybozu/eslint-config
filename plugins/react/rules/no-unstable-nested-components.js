// Calls that wrap a component function without changing its identity semantics
const wrapperNames = new Set(["memo", "forwardRef", "useCallback"]);

function isWrapperCall(node) {
  if (node.type !== "CallExpression") return false;
  const callee = node.callee;
  if (callee.type === "Identifier") return wrapperNames.has(callee.name);
  if (
    callee.type === "MemberExpression" &&
    callee.property.type === "Identifier"
  ) {
    return wrapperNames.has(callee.property.name);
  }
  return false;
}

function getFunctionName(node) {
  if (node.id) return node.id.name;
  // Unwrap wrapper calls: const Child = memo(() => ...), memo(forwardRef(...))
  let current = node;
  while (
    current.parent?.type === "CallExpression" &&
    isWrapperCall(current.parent) &&
    current.parent.arguments[0] === current
  ) {
    current = current.parent;
  }
  const parent = current.parent;
  if (
    parent?.type === "VariableDeclarator" &&
    parent.id?.type === "Identifier"
  ) {
    return parent.id.name;
  }
  if (
    parent?.type === "AssignmentExpression" &&
    parent.left.type === "Identifier"
  ) {
    return parent.left.name;
  }
  return null;
}

function isComponentName(name) {
  if (!name) return false;
  return name[0] === name[0].toUpperCase() && name[0] !== name[0].toLowerCase();
}

function isHookName(name) {
  return !!name && /^use[A-Z0-9]/.test(name);
}

function isFunctionNode(node) {
  return (
    node.type === "FunctionDeclaration" ||
    node.type === "FunctionExpression" ||
    node.type === "ArrowFunctionExpression"
  );
}

function isInsideJSX(node) {
  let current = node.parent;
  while (current) {
    if (
      current.type === "JSXElement" ||
      current.type === "JSXFragment" ||
      current.type === "JSXExpressionContainer"
    ) {
      return true;
    }
    if (isFunctionNode(current)) return false;
    current = current.parent;
  }
  return false;
}

function isInsideRenderContext(node) {
  // Check if node is inside a component render function or a custom hook
  let current = node.parent;
  while (current) {
    if (isFunctionNode(current)) {
      const name = getFunctionName(current);
      if (isComponentName(name) || isHookName(name)) return true;
      if (isInsideJSX(current)) return true;
      return false;
    }
    current = current.parent;
  }
  return false;
}

// A JSX value is a JSX node, possibly behind conditional/logical branches
function isJSXValue(node) {
  if (!node) return false;
  switch (node.type) {
    case "JSXElement":
    case "JSXFragment":
      return true;
    case "ConditionalExpression":
      return isJSXValue(node.consequent) || isJSXValue(node.alternate);
    case "LogicalExpression":
      return isJSXValue(node.left) || isJSXValue(node.right);
    default:
      return false;
  }
}

// Whether the function returns JSX (strictly as a return value,
// not merely containing JSX somewhere in its body)
function isReturningJSX(node) {
  if (node.body.type !== "BlockStatement") return isJSXValue(node.body);

  let found = false;
  function walk(n) {
    if (found || !n || typeof n !== "object" || !n.type) return;
    if (isFunctionNode(n)) return; // do not cross into nested functions
    if (n.type === "ReturnStatement") {
      if (isJSXValue(n.argument)) found = true;
      return;
    }
    for (const key of Object.keys(n)) {
      if (key === "parent") continue;
      const val = n[key];
      if (Array.isArray(val)) val.forEach(walk);
      else if (val && typeof val === "object" && val.type) walk(val);
    }
  }
  node.body.body.forEach(walk);
  return found;
}

// <Comp renderRow={fn} />, <Comp children={fn} />, <Comp>{fn}</Comp>
// and { render: fn } are render-prop patterns and stable by contract
function isRenderPropValue(node) {
  const parent = node.parent;
  if (parent?.type === "Property" && parent.key?.type === "Identifier") {
    return /^render/.test(parent.key.name);
  }
  if (parent?.type !== "JSXExpressionContainer") return false;
  if (parent.parent?.type === "JSXElement") return true; // function as children
  if (
    parent.parent?.type === "JSXAttribute" &&
    parent.parent.name.type === "JSXIdentifier"
  ) {
    const propName = parent.parent.name.name;
    return /^render/.test(propName) || propName === "children";
  }
  return false;
}

// Function passed directly as a JSX prop value
function isDirectPropValue(node) {
  return (
    node.parent?.type === "JSXExpressionContainer" &&
    node.parent.parent?.type === "JSXAttribute"
  );
}

// items.map(function Row() { ... }) — allowed like upstream
function isIteratorCallback(node) {
  const parent = node.parent;
  return (
    parent?.type === "CallExpression" &&
    parent.callee.type === "MemberExpression" &&
    parent.callee.property.type === "Identifier" &&
    (parent.callee.property.name === "map" ||
      parent.callee.property.name === "flatMap") &&
    parent.arguments.includes(node)
  );
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow creating unstable components inside other components or render functions",
    },
    messages: {
      noNestedComponent:
        "Do not define components during render. Move this component definition outside the render function.",
    },
    schema: [
      {
        type: "object",
        properties: {
          allowAsProps: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const allowAsProps = context.options[0]?.allowAsProps ?? false;

    function checkFunction(node) {
      // Must actually return JSX
      if (!isReturningJSX(node)) return;

      if (isRenderPropValue(node)) return;
      if (isIteratorCallback(node)) return;

      const name = getFunctionName(node);

      if (isDirectPropValue(node)) {
        if (allowAsProps) return;
        // Anonymous or PascalCase functions returning JSX passed as a
        // non-render prop are unstable components
        if (name === null || isComponentName(name)) {
          context.report({ node, messageId: "noNestedComponent" });
        }
        return;
      }

      // Must look like a component (PascalCase)
      if (!isComponentName(name)) return;

      // Must be inside another render context
      if (!isInsideRenderContext(node)) return;

      context.report({ node, messageId: "noNestedComponent" });
    }

    return {
      FunctionDeclaration: checkFunction,
      FunctionExpression: checkFunction,
      ArrowFunctionExpression: checkFunction,
    };
  },
};
