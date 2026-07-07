import { getProp } from "../utils.js";

// Methods whose callback return values are rendered as an element array
const iteratorMethods = new Set(["map", "flatMap"]);

function hasKeyProp(node) {
  return !!getProp(node.openingElement, "key");
}

function isJSXNode(node) {
  return node.type === "JSXElement" || node.type === "JSXFragment";
}

function isIteratorCallback(node) {
  const parent = node.parent;
  if (parent.type !== "CallExpression") return false;

  // array.map(x => ...) / array.flatMap(x => ...)
  if (
    parent.callee.type === "MemberExpression" &&
    iteratorMethods.has(parent.callee.property.name) &&
    parent.arguments[0] === node
  ) {
    return true;
  }

  // Array.from(items, x => ...)
  if (
    parent.callee.type === "MemberExpression" &&
    parent.callee.object.type === "Identifier" &&
    parent.callee.object.name === "Array" &&
    parent.callee.property.name === "from" &&
    parent.arguments[1] === node
  ) {
    return true;
  }

  return false;
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

    // Check an expression returned from an iterator callback, descending
    // into conditional/logical branches: x => cond ? <a/> : <b/>
    function checkReturnedExpression(node, messageId) {
      if (isJSXNode(node)) {
        checkKeyProp(node, messageId);
        return;
      }
      if (node.type === "ConditionalExpression") {
        checkReturnedExpression(node.consequent, messageId);
        checkReturnedExpression(node.alternate, messageId);
        return;
      }
      if (node.type === "LogicalExpression") {
        checkReturnedExpression(node.left, messageId);
        checkReturnedExpression(node.right, messageId);
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

      // array.map(x => <div/>)  or  array.map(x => (x.a ? <div/> : <span/>))
      ArrowFunctionExpression(node) {
        if (!isIteratorCallback(node)) return;
        if (node.body.type === "BlockStatement") return; // handled by ReturnStatement
        checkReturnedExpression(node.body, "missingIteratorKey");
      },

      // array.map(x => { return <div/>; })
      ReturnStatement(node) {
        if (!node.argument) return;
        // Walk up to find enclosing function
        let current = node.parent;
        while (current) {
          if (
            current.type === "ArrowFunctionExpression" ||
            current.type === "FunctionExpression"
          ) {
            if (isIteratorCallback(current)) {
              checkReturnedExpression(node.argument, "missingIteratorKey");
            }
            break;
          }
          current = current.parent;
        }
      },
    };
  },
};
