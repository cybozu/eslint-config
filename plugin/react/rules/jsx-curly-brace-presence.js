/**
 * "never": disallow unnecessary curly braces (default for both props and children)
 * "always": require curly braces
 * "ignore": do not check
 */

function needsEscape(str) {
  return /[{}<>]/.test(str);
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    fixable: "code",
    docs: {
      description:
        "Disallow unnecessary JSX expressions when literals could be used directly",
    },
    messages: {
      unnecessaryCurly:
        "Curly braces are unnecessary here. Remove them.",
      missingCurly:
        "Curly braces are required here.",
    },
    schema: [
      {
        type: "object",
        properties: {
          props: { enum: ["always", "never", "ignore"] },
          children: { enum: ["always", "never", "ignore"] },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const propsRule = context.options[0]?.props ?? "never";
    const childrenRule = context.options[0]?.children ?? "never";

    function checkCurly(node, rule, fixContext) {
      if (rule === "ignore") return;

      const isContainer = node.type === "JSXExpressionContainer";

      if (rule === "never" && isContainer) {
        const expr = node.expression;
        // Only flag string literals (not template literals, not expressions)
        if (expr.type !== "Literal" || typeof expr.value !== "string") return;
        // Don't remove if the string contains characters that need JSX escaping
        if (needsEscape(expr.value)) return;
        context.report({
          node,
          messageId: "unnecessaryCurly",
          fix(fixer) {
            if (fixContext === "prop") {
              // Replace ={" string"} with ="string"
              return fixer.replaceText(node, `"${expr.value}"`);
            }
            // children: replace {" string"} with just the string
            return fixer.replaceText(node, expr.value);
          },
        });
      }

      if (rule === "always" && !isContainer) {
        if (node.type === "Literal") {
          context.report({
            node,
            messageId: "missingCurly",
            fix(fixer) {
              return fixer.replaceText(node, `{${JSON.stringify(node.value)}}`);
            },
          });
        }
      }
    }

    return {
      JSXAttribute(node) {
        if (!node.value) return;
        checkCurly(node.value, propsRule, "prop");
      },
      JSXElement(node) {
        node.children.forEach((child) => {
          if (child.type === "JSXExpressionContainer") {
            checkCurly(child, childrenRule, "children");
          } else if (child.type === "Literal") {
            // String literal child
            if (typeof child.value === "string" && child.value.trim()) {
              checkCurly(child, childrenRule, "children");
            }
          }
        });
      },
    };
  },
};
