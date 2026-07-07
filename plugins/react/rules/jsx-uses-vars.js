/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow variables used in JSX to be incorrectly marked as unused",
    },
    schema: [],
  },
  create(context) {
    const sourceCode = context.sourceCode;

    function markIdentifier(node) {
      if (node.type === "JSXMemberExpression") {
        markIdentifier(node.object);
      } else if (node.type === "JSXIdentifier") {
        sourceCode.markVariableAsUsed(node.name, node);
      }
    }

    return {
      JSXOpeningElement(node) {
        markIdentifier(node.name);
      },
    };
  },
};
