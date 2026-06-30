function getFunctionName(node) {
  if (node.id) return node.id.name;
  if (
    node.parent?.type === "VariableDeclarator" &&
    node.parent.id?.type === "Identifier"
  ) {
    return node.parent.id.name;
  }
  return null;
}

function isComponentName(name) {
  if (!name) return false;
  return name[0] === name[0].toUpperCase() && name[0] !== name[0].toLowerCase();
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
    // Stop at module-level or another function that is a component
    if (
      current.type === "FunctionDeclaration" ||
      current.type === "FunctionExpression" ||
      current.type === "ArrowFunctionExpression"
    ) {
      return false;
    }
    current = current.parent;
  }
  return false;
}

function isInsideRenderReturn(node) {
  // Check if node is inside a function that is itself inside JSX or a render prop
  let current = node.parent;
  while (current) {
    if (
      current.type === "FunctionDeclaration" ||
      current.type === "FunctionExpression" ||
      current.type === "ArrowFunctionExpression"
    ) {
      // Check if this outer function is a component (PascalCase)
      const name = getFunctionName(current);
      if (isComponentName(name)) return true;
      // Or inside JSX
      if (isInsideJSX(current)) return true;
      return false;
    }
    current = current.parent;
  }
  return false;
}

function returnsJSX(node) {
  let found = false;
  function walk(n) {
    if (found || !n || typeof n !== "object") return;
    if (n.type === "JSXElement" || n.type === "JSXFragment") {
      found = true;
      return;
    }
    if (
      n !== node &&
      (n.type === "FunctionDeclaration" ||
        n.type === "FunctionExpression" ||
        n.type === "ArrowFunctionExpression")
    ) {
      return;
    }
    for (const key of Object.keys(n)) {
      if (key === "parent") continue;
      const val = n[key];
      if (Array.isArray(val)) val.forEach(walk);
      else if (val && typeof val === "object" && val.type) walk(val);
    }
  }
  walk(node.body ?? node);
  return found;
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
      const name = getFunctionName(node);

      // Must look like a component (PascalCase)
      if (!isComponentName(name)) return;

      // Must actually return JSX
      if (!returnsJSX(node)) return;

      // Must be inside another render context
      if (!isInsideRenderReturn(node)) return;

      // If allowAsProps, skip if this is a JSX attribute value
      if (allowAsProps && node.parent?.type === "JSXExpressionContainer") {
        return;
      }

      context.report({ node, messageId: "noNestedComponent" });
    }

    return {
      FunctionDeclaration: checkFunction,
      FunctionExpression: checkFunction,
      ArrowFunctionExpression: checkFunction,
    };
  },
};
