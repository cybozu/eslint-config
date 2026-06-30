import { getProp, getElementType, isDOMElement } from "../utils.js";

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow passing children to void DOM elements",
    },
    messages: {
      noChildren:
        "Void DOM element <{{element}} /> cannot receive children.",
      noChildrenProp:
        "Void DOM element <{{element}} /> cannot receive a children prop.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXElement(node) {
        const name = getElementType(node.openingElement);
        if (!isDOMElement(name) || !voidElements.has(name)) return;

        const nonEmptyChildren = node.children.filter(
          (child) =>
            child.type !== "JSXText" || child.value.trim() !== "",
        );
        if (nonEmptyChildren.length > 0) {
          context.report({
            node,
            messageId: "noChildren",
            data: { element: name },
          });
          return;
        }
        if (getProp(node.openingElement, "children")) {
          context.report({
            node,
            messageId: "noChildrenProp",
            data: { element: name },
          });
        }
      },
    };
  },
};
