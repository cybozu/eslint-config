/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow `.bind()` or arrow functions in JSX event handler props",
    },
    messages: {
      bindCall: "Do not use `.bind()` in JSX props.",
      arrowFunc: "Do not use arrow functions in JSX props.",
      func: "Do not use function expressions in JSX props.",
    },
    schema: [
      {
        type: "object",
        properties: {
          allowArrowFunctions: { type: "boolean" },
          allowBind: { type: "boolean" },
          allowFunctions: { type: "boolean" },
          ignoreRefs: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const allowArrowFunctions =
      context.options[0]?.allowArrowFunctions ?? false;
    const allowBind = context.options[0]?.allowBind ?? false;
    const allowFunctions = context.options[0]?.allowFunctions ?? false;
    const ignoreRefs = context.options[0]?.ignoreRefs ?? false;

    return {
      JSXAttribute(node) {
        if (!node.value || node.value.type !== "JSXExpressionContainer") return;
        const expr = node.value.expression;

        if (ignoreRefs && node.name.name === "ref") return;

        if (!allowBind) {
          if (
            expr.type === "CallExpression" &&
            expr.callee.type === "MemberExpression" &&
            expr.callee.property.type === "Identifier" &&
            expr.callee.property.name === "bind"
          ) {
            context.report({ node: expr, messageId: "bindCall" });
          }
        }

        if (!allowArrowFunctions) {
          if (expr.type === "ArrowFunctionExpression") {
            context.report({ node: expr, messageId: "arrowFunc" });
          }
        }

        if (!allowFunctions) {
          if (expr.type === "FunctionExpression") {
            context.report({ node: expr, messageId: "func" });
          }
        }
      },
    };
  },
};
