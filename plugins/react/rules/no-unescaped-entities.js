const defaultEntities = [
  { char: ">", alternatives: ["&gt;", "{'>'}", "&{'>'};"] },
  { char: '"', alternatives: ['&quot;', '{"\\\""}'] },
  { char: "'", alternatives: ["&apos;", "{\"'\"}"] },
  { char: "}", alternatives: ["&#125;", "{'}'}"] },
];

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow unescaped HTML entities from appearing in markup",
    },
    messages: {
      unescapedEntity:
        "`{{entity}}` can be escaped with {{alternatives}}.",
    },
    schema: [
      {
        type: "object",
        properties: {
          forbid: {
            type: "array",
            items: {
              oneOf: [
                { type: "string" },
                {
                  type: "object",
                  properties: {
                    char: { type: "string" },
                    alternatives: {
                      type: "array",
                      items: { type: "string" },
                    },
                  },
                  required: ["char"],
                },
              ],
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const forbid =
      context.options[0]?.forbid?.map((entry) =>
        typeof entry === "string"
          ? { char: entry, alternatives: [] }
          : entry,
      ) ?? defaultEntities;

    return {
      JSXElement(node) {
        node.children.forEach((child) => {
          if (child.type !== "JSXText") return;
          const text = child.value;
          for (const { char, alternatives } of forbid) {
            if (text.includes(char)) {
              context.report({
                node: child,
                messageId: "unescapedEntity",
                data: {
                  entity: char,
                  alternatives: alternatives.join(", ") || "HTML entities",
                },
              });
            }
          }
        });
      },
    };
  },
};
