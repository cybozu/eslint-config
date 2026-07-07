import { getProp, hasChildren } from "../utils.js";

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow using `dangerouslySetInnerHTML` together with children",
    },
    messages: {
      dangerWithChildren:
        "Only set one of `children` or `dangerouslySetInnerHTML`.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXElement(node) {
        if (!getProp(node.openingElement, "dangerouslySetInnerHTML")) return;
        if (hasChildren(node)) {
          context.report({ node, messageId: "dangerWithChildren" });
        }
      },
    };
  },
};
