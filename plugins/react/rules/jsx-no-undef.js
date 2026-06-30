/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: { description: "Disallow undeclared variables in JSX" },
    messages: {
      undefined: "'{{name}}' is not defined.",
    },
    schema: [],
  },
  create(context) {
    function checkIdentifier(node) {
      // Only check user-defined components (PascalCase or containing dot)
      // JSXMemberExpression and other types don't need checking here
      const name = node.type === "JSXIdentifier" ? node.name : null;

      if (!name) return;
      // Lowercase = DOM element, skip
      if (name[0] === name[0].toLowerCase()) return;

      const sourceCode = context.sourceCode ?? context.getSourceCode();
      const scope = sourceCode.getScope(node);

      let current = scope;
      while (current) {
        const found = current.variables.find((v) => v.name === name);
        if (found) return;
        current = current.upper;
      }

      context.report({ node, messageId: "undefined", data: { name } });
    }

    function getRootObject(node) {
      if (node.type === "JSXMemberExpression") {
        return getRootObject(node.object);
      }
      return node;
    }

    return {
      JSXOpeningElement(node) {
        if (node.name.type === "JSXMemberExpression") {
          checkIdentifier(getRootObject(node.name));
        } else {
          checkIdentifier(node.name);
        }
      },
    };
  },
};
