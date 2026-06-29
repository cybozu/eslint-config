import { getProp } from "../utils.js";

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow usage of `dangerouslySetInnerHTML`",
    },
    messages: {
      noHtmlProp: "Dangerous property 'dangerouslySetInnerHTML' found.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const dangerous = getProp(node, "dangerouslySetInnerHTML");
        if (dangerous) {
          context.report({ node: dangerous, messageId: "noHtmlProp" });
        }
      },
    };
  },
};
