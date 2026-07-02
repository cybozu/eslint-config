import { getProp, getElementType, isDOMElement } from "../utils.js";

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
        // On custom components the prop is just an ordinary prop name
        if (!isDOMElement(getElementType(node))) return;
        const dangerous = getProp(node, "dangerouslySetInnerHTML");
        if (dangerous) {
          context.report({ node: dangerous, messageId: "noHtmlProp" });
        }
      },
    };
  },
};
