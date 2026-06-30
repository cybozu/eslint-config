/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "layout",
    docs: {
      description:
        "Require the first prop to be on a new line when there are multiple props",
    },
    messages: {
      propOnNewLine:
        "First prop should be on a new line when there are multiple props.",
      propOnSameLine:
        "First prop should be on the same line as the opening tag.",
    },
    schema: [{ enum: ["always", "never", "multiline", "multiline-multiprop"] }],
  },
  create(context) {
    const rule = context.options[0] ?? "multiline-multiprop";

    return {
      JSXOpeningElement(node) {
        if (node.attributes.length === 0) return;

        const firstProp = node.attributes[0];
        const tagLine = node.loc.start.line;
        const propLine = firstProp.loc.start.line;
        const isOnNewLine = propLine > tagLine;

        if (rule === "always") {
          if (!isOnNewLine) {
            context.report({ node: firstProp, messageId: "propOnNewLine" });
          }
        } else if (rule === "never") {
          if (isOnNewLine) {
            context.report({ node: firstProp, messageId: "propOnSameLine" });
          }
        } else if (rule === "multiline") {
          // Require new line if element spans multiple lines
          const closingLine = node.loc.end.line;
          if (closingLine > tagLine && !isOnNewLine) {
            context.report({ node: firstProp, messageId: "propOnNewLine" });
          }
        } else if (rule === "multiline-multiprop") {
          // Require new line if element has multiple props AND spans multiple lines
          if (node.attributes.length < 2) return;
          const lastPropLine =
            node.attributes[node.attributes.length - 1].loc.end.line;
          if (lastPropLine > tagLine && !isOnNewLine) {
            context.report({ node: firstProp, messageId: "propOnNewLine" });
          }
        }
      },
    };
  },
};
