/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: { description: "Disallow duplicate props in JSX" },
    messages: {
      duplicate: "No duplicate props allowed. '{{name}}' is already defined.",
    },
    schema: [
      {
        type: "object",
        properties: {
          ignoreCase: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const ignoreCase = context.options[0]?.ignoreCase ?? false;

    return {
      JSXOpeningElement(node) {
        const seen = new Set();
        for (const attr of node.attributes) {
          if (attr.type !== "JSXAttribute") continue;
          const raw = attr.name.name;
          const name = ignoreCase ? raw.toLowerCase() : raw;
          if (seen.has(name)) {
            context.report({
              node: attr,
              messageId: "duplicate",
              data: { name: raw },
            });
          } else {
            seen.add(name);
          }
        }
      },
    };
  },
};
