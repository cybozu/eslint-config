import { getProp, getStaticStringValue } from "../utils.js";

function hasRelNoreferrer(openingElement) {
  const relAttr = getProp(openingElement, "rel");
  if (!relAttr) return false;
  const value = getStaticStringValue(relAttr);
  if (value === null) return true; // dynamic — give benefit of the doubt
  return value.split(/\s+/).includes("noreferrer");
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

        const value = getStaticStringValue(targetAttr);
        if (value !== "_blank") return;

        if (!hasRelNoreferrer(node)) {
          context.report({ node: targetAttr, messageId: "noTargetBlank" });
        }
      },
    };
  },
};
