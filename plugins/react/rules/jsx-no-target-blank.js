import { getProp, getStaticStringValue } from "../utils.js";

function hasRelNoreferrer(openingElement) {
  const relAttr = getProp(openingElement, "rel");
  if (!relAttr) return false;
  const value = getStaticStringValue(relAttr);
  // Bare `rel` or a dynamic value is not a guaranteed "noreferrer"
  if (value === null) return false;
  return value.split(/\s+/).includes("noreferrer");
}

// target="_blank", target={'_blank'} or target={cond ? '_blank' : '_self'}
function targetPossiblyBlank(targetAttr) {
  if (!targetAttr.value) return false;
  const staticValue = getStaticStringValue(targetAttr);
  if (staticValue !== null) return staticValue.toLowerCase() === "_blank";
  if (targetAttr.value.type === "JSXExpressionContainer") {
    const expr = targetAttr.value.expression;
    if (expr.type === "ConditionalExpression") {
      return [expr.consequent, expr.alternate].some(
        (branch) =>
          branch.type === "Literal" &&
          typeof branch.value === "string" &&
          branch.value.toLowerCase() === "_blank",
      );
    }
  }
  return false;
}

// External (`scheme:` or `//`) hrefs can control window.opener; relative links can't
function hasExternalOrDynamicHref(openingElement) {
  const hrefAttr = getProp(openingElement, "href");
  if (!hrefAttr || !hrefAttr.value) return false;
  if (hrefAttr.value.type === "JSXExpressionContainer") {
    const expr = hrefAttr.value.expression;
    if (expr.type === "Literal" && typeof expr.value === "string") {
      return /^(?:\w+:|\/\/)/.test(expr.value);
    }
    return true; // dynamic href
  }
  if (
    hrefAttr.value.type === "Literal" &&
    typeof hrefAttr.value.value === "string"
  ) {
    return /^(?:\w+:|\/\/)/.test(hrefAttr.value.value);
  }
  return false;
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description: 'Disallow `target="_blank"` without `rel="noreferrer"`',
    },
    messages: {
      noTargetBlank:
        'Using target="_blank" without rel="noreferrer" is a security risk.',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const targetAttr = getProp(node, "target");
        if (!targetAttr) return;
        if (!targetPossiblyBlank(targetAttr)) return;
        if (!hasExternalOrDynamicHref(node)) return;

        if (!hasRelNoreferrer(node)) {
          context.report({ node: targetAttr, messageId: "noTargetBlank" });
        }
      },
    };
  },
};
