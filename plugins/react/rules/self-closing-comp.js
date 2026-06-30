import { isDOMElement, getElementType } from "../utils.js";

// Void HTML elements must not be self-closed differently, but for components
// and non-void elements we enforce self-closing when there are no children.
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
    type: "suggestion",
    fixable: "code",
    docs: {
      description:
        "Require self-closing for components and HTML elements with no children",
    },
    messages: {
      notSelfClosing:
        "Empty components should be self-closing. Replace `<{{name}}></ {{name}}>` with `<{{name}} />`.",
    },
    schema: [
      {
        type: "object",
        properties: {
          component: { type: "boolean" },
          html: { type: "boolean" },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const checkComponent = context.options[0]?.component !== false;
    const checkHtml = context.options[0]?.html !== false;

    return {
      JSXElement(node) {
        if (node.openingElement.selfClosing) return;

        const name = getElementType(node.openingElement);
        const isDOM = isDOMElement(name);

        if (isDOM && voidElements.has(name)) return;
        if (isDOM && !checkHtml) return;
        if (!isDOM && !checkComponent) return;

        const meaningfulChildren = node.children.filter(
          (child) => child.type !== "JSXText" || child.value.trim() !== "",
        );
        if (meaningfulChildren.length > 0) return;

        context.report({
          node,
          messageId: "notSelfClosing",
          data: { name },
          fix(fixer) {
            const sourceCode = context.sourceCode ?? context.getSourceCode();
            const openEnd = node.openingElement.range[1];
            const openText = sourceCode.getText(node.openingElement);
            const newOpen = openText.replace(/>$/, " />");
            return [
              fixer.replaceText(node.openingElement, newOpen),
              fixer.removeRange([openEnd, node.closingElement.range[1]]),
            ];
          },
        });
      },
    };
  },
};
