function getFunctionName(node) {
  if (node.id) return node.id.name;
  if (
    node.parent?.type === "VariableDeclarator" &&
    node.parent.id?.type === "Identifier"
  ) {
    return node.parent.id.name;
  }
  if (
    node.parent?.type === "AssignmentExpression" &&
    node.parent.left?.type === "Identifier"
  ) {
    return node.parent.left.name;
  }
  return null;
}

function returnsJSX(node) {
  let found = false;
  function walk(n) {
    if (found) return;
    if (!n || typeof n !== "object") return;
    if (n.type === "JSXElement" || n.type === "JSXFragment") {
      found = true;
      return;
    }
    // Don't descend into nested functions
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
    type: "suggestion",
    docs: {
      description: "Disallow multiple component definitions per file",
    },
    messages: {
      onlyOneComponent:
        "Declare only one React component per file.",
    },
    schema: [
      {
        type: "object",
        properties: {
          ignoreStateless: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const ignoreStateless = context.options[0]?.ignoreStateless ?? false;
    const components = [];

    function addComponent(node) {
      const name = getFunctionName(node);
      if (!name) return;

      // We check returnsJSX to confirm it's actually a component
      if (!returnsJSX(node)) return;

      // Arrow function components are "stateless" in the traditional sense
      const isStateless = node.type === "ArrowFunctionExpression";
      if (ignoreStateless && isStateless) return;

      components.push(node);
    }

    return {
      FunctionDeclaration: addComponent,
      FunctionExpression: addComponent,
      ArrowFunctionExpression: addComponent,
      "Program:exit"() {
        if (components.length <= 1) return;
        // Report all components beyond the first
        for (let i = 1; i < components.length; i++) {
          context.report({ node: components[i], messageId: "onlyOneComponent" });
        }
      },
    };
  },
};
