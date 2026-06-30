import { getProp } from "../utils.js";

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow passing `children` as a prop",
    },
    messages: {
      childrenProp:
        "Do not pass children as props. Instead, nest children between the opening and closing tags.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const childrenProp = getProp(node, "children");
        if (childrenProp) {
          context.report({ node: childrenProp, messageId: "childrenProp" });
        }
      },
    };
  },
};
