/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Restrict file extensions that may contain JSX",
    },
    messages: {
      noJSXWithExtension: "JSX not allowed in files with extension '{{ext}}'.",
    },
    schema: [
      {
        type: "object",
        properties: {
          extensions: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const extensions = context.options[0]?.extensions ?? [".jsx", ".tsx"];
    let hasJSX = false;

    return {
      JSXElement() {
        hasJSX = true;
      },
      JSXFragment() {
        hasJSX = true;
      },
      "Program:exit"(node) {
        if (!hasJSX) return;
        const filename = context.filename ?? context.getFilename();
        const ext = filename.slice(filename.lastIndexOf("."));
        if (!extensions.includes(ext)) {
          context.report({
            node,
            messageId: "noJSXWithExtension",
            data: { ext },
          });
        }
      },
    };
  },
};
