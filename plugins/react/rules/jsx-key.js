import { getProp } from "../utils.js";

const iteratorMethods = new Set([
  "map",
  "flatMap",
  "filter",
  "find",
  "findIndex",
  "some",
  "every",
  "reduce",
  "reduceRight",
]);

function hasKeyProp(node) {
  return !!getProp(node.openingElement, "key");
}

function isJSXNode(node) {
  return node.type === "JSXElement" || node.type === "JSXFragment";
}

function isIteratorCallback(node) {
  const parent = node.parent;
  if (
    parent.type !== "CallExpression" ||
    parent.callee.type !== "MemberExpression"
  ) {
    return false;
  }
  const methodName = parent.callee.property.name;
  return iteratorMethods.has(methodName);
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description: "Require `key` prop when returning an array of JSX elements",
    },
    messages: {
      missingKey: 'Missing "key" prop for element in array.',
      missingIteratorKey:
        'Missing "key" prop for element in iterator. Wrap it in an array or provide a key.',
    },
    schema: [],
  },
  create(context) {
    function checkKeyProp(node, messageId) {
      if (node.type === "JSXFragment") {
        context.report({ node, messageId });
        return;
      }
      if (!hasKeyProp(node)) {
        context.report({ node, messageId });
      }
    }

    return {
      // [<div/>, <span/>]
      ArrayExpression(node) {
        node.elements.forEach((element) => {
          if (element && isJSXNode(element)) {
            checkKeyProp(element, "missingKey");
          }
        });
      },

      // array.map(x => <div/>)  or  array.map(x => (<div/>))
      ArrowFunctionExpression(node) {
        if (!isIteratorCallback(node)) return;
        const body = node.body;
        if (isJSXNode(body)) {
          checkKeyProp(body, "missingIteratorKey");
        }
      },

      // array.map(x => { return <div/>; })
      ReturnStatement(node) {
        if (!node.argument || !isJSXNode(node.argument)) return;
        // Walk up to find enclosing function
        let current = node.parent;
        while (current) {
          if (
            current.type === "ArrowFunctionExpression" ||
            current.type === "FunctionExpression"
          ) {
            if (isIteratorCallback(current)) {
              checkKeyProp(node.argument, "missingIteratorKey");
            }
            break;
          }
          current = current.parent;
        }
      },
    };
  },
};
