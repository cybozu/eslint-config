import { getElementType, isDOMElement } from "../utils.js";

const PASCAL_CASE_REGEX = /^[A-Z][a-zA-Z0-9]*$/;
const ALL_CAPS_REGEX = /^[A-Z][A-Z0-9_]*$/;

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce PascalCase for user-defined JSX components",
    },
    messages: {
      usePascalCase:
        "Component name '{{name}}' should be written in PascalCase.",
    },
    schema: [
      {
        type: "object",
        properties: {
          allowAllCaps: { type: "boolean" },
          allowNamespace: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const allowAllCaps = context.options[0]?.allowAllCaps ?? false;
    const allowNamespace = context.options[0]?.allowNamespace ?? false;

    return {
      JSXOpeningElement(node) {
        const fullName = getElementType(node);

        // Member expressions (Foo.Bar) — check each segment
        if (node.name.type === "JSXMemberExpression") {
          if (allowNamespace) return;
        }

        // Namespaced (foo:Bar) — skip
        if (node.name.type === "JSXNamespacedName") return;

        const name = fullName.split(".")[0];

        // All-lowercase names are treated as DOM elements by React — skip
        if (name === name.toLowerCase()) return;

        if (PASCAL_CASE_REGEX.test(name)) return;
        if (allowAllCaps && ALL_CAPS_REGEX.test(name)) return;

        context.report({
          node,
          messageId: "usePascalCase",
          data: { name },
        });
      },
    };
  },
};
