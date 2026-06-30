/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "layout",
    docs: {
      description: "Limit the maximum number of props per line in JSX",
    },
    messages: {
      newLine: "Prop `{{prop}}` must be placed on a new line.",
    },
    schema: [
      {
        type: "object",
        properties: {
          maximum: { type: "integer", minimum: 1 },
          when: { enum: ["always", "multiline"] },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const maximum = context.options[0]?.maximum ?? 1;
    const when = context.options[0]?.when ?? "always";

    return {
      JSXOpeningElement(node) {
        if (node.attributes.length === 0) return;

        const tagLine = node.loc.start.line;
        const lastLine =
          node.attributes[node.attributes.length - 1].loc.end.line;

        if (when === "multiline" && lastLine === tagLine) return;

        // Group props by line
        const byLine = new Map();
        for (const attr of node.attributes) {
          const line = attr.loc.start.line;
          if (!byLine.has(line)) byLine.set(line, []);
          byLine.get(line).push(attr);
        }

        for (const attrs of byLine.values()) {
          if (attrs.length > maximum) {
            // Report each prop beyond the limit
            for (let i = maximum; i < attrs.length; i++) {
              context.report({
                node: attrs[i],
                messageId: "newLine",
                data: {
                  prop:
                    attrs[i].type === "JSXAttribute"
                      ? attrs[i].name.name
                      : "spread",
                },
              });
            }
          }
        }
      },
    };
  },
};
