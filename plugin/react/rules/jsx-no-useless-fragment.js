function isFragment(node) {
  if (node.type === "JSXFragment") return true;
  if (node.type !== "JSXElement") return false;
  const name = node.openingElement.name;
  if (name.type === "JSXIdentifier" && name.name === "Fragment") return true;
  if (
    name.type === "JSXMemberExpression" &&
    name.object.type === "JSXIdentifier" &&
    name.object.name === "React" &&
    name.property.type === "JSXIdentifier" &&
    name.property.name === "Fragment"
  ) {
    return true;
  }
  return false;
}

function getMeaningfulChildren(node) {
  return node.children.filter(
    (child) =>
      child.type !== "JSXText" || child.value.trim() !== "",
  );
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow unnecessary JSX fragments",
    },
    messages: {
      uselessFragment: "Fragments should contain more than one child.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXFragment(node) {
        const children = getMeaningfulChildren(node);

        // Empty fragment
        if (children.length === 0) {
          context.report({ node, messageId: "uselessFragment" });
          return;
        }

        // Single child fragment — always useless
        if (children.length === 1) {
          context.report({ node, messageId: "uselessFragment" });
        }
      },

      JSXElement(node) {
        if (!isFragment(node)) return;
        const children = getMeaningfulChildren(node);

        if (children.length === 0) {
          context.report({ node, messageId: "uselessFragment" });
          return;
        }

        if (children.length === 1) {
          context.report({ node, messageId: "uselessFragment" });
        }
      },
    };
  },
};
