import { getProp, isDOMElement, getElementType } from "../utils.js";

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Require that the `style` prop value is an object, not a string",
    },
    messages: {
      stylePropNotObject:
        "Style prop value must be an object, not a string.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const elementName = getElementType(node);

        // Only check DOM elements (lowercase); custom components may handle style differently
        if (!isDOMElement(elementName)) return;

        const styleProp = getProp(node, "style");
        if (!styleProp || styleProp.value === null) return;

        const value = styleProp.value;

        // style="string"
        if (value.type === "Literal" && typeof value.value === "string") {
          context.report({ node: styleProp, messageId: "stylePropNotObject" });
          return;
        }

        // style={"string"}
        if (
          value.type === "JSXExpressionContainer" &&
          value.expression.type === "Literal" &&
          typeof value.expression.value === "string"
        ) {
          context.report({ node: styleProp, messageId: "stylePropNotObject" });
        }
      },
    };
  },
};
