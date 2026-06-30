/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    fixable: "code",
    docs: {
      description: "Enforce boolean attribute notation in JSX",
    },
    messages: {
      omitBoolean: "Value must be omitted for boolean attributes.",
      setBoolean: "Value must be set for boolean attributes.",
    },
    schema: [{ enum: ["always", "never"] }],
  },
  create(context) {
    // "never" = omit ={true}  (default), "always" = require ={true}
    const always = context.options[0] === "always";

    return {
      JSXAttribute(node) {
        if (!always) {
          // "never": flag `foo={true}`
          if (
            node.value?.type === "JSXExpressionContainer" &&
            node.value.expression.type === "Literal" &&
            node.value.expression.value === true
          ) {
            context.report({
              node,
              messageId: "omitBoolean",
              fix(fixer) {
                return fixer.removeRange([
                  node.name.range[1],
                  node.value.range[1],
                ]);
              },
            });
          }
        } else {
          // "always": flag shorthand `foo` (no value)
          if (node.value === null) {
            context.report({
              node,
              messageId: "setBoolean",
              fix(fixer) {
                return fixer.insertTextAfter(node, "={true}");
              },
            });
          }
        }
      },
    };
  },
};
