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
    function checkIdentifier(node, isMemberRoot) {
      const name = node.type === "JSXIdentifier" ? node.name : null;

      if (!name) return;
      // Lowercase = DOM element, skip (member roots like <foo.bar /> are
      // always variable references regardless of case)
      if (!isMemberRoot && name[0] === name[0].toLowerCase()) return;

      const scope = context.sourceCode.getScope(node);

      let current = scope;
      while (current) {
        const found = current.variables.find((v) => v.name === name);
        // Config-provided globals (no actual definitions) don't count
        if (found && (current.type !== "global" || found.defs.length > 0)) {
          return;
        }
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
          checkIdentifier(getRootObject(node.name), true);
        } else {
          checkIdentifier(node.name, false);
        }
      },
    };
  },
};
