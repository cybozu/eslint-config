/**
 * Get a JSX attribute by name from an opening element's attributes.
 * @param {import('estree-jsx').JSXOpeningElement} openingElement
 * @param {string} propName
 */
export function getProp(openingElement, propName) {
  return openingElement.attributes.find(
    (attr) =>
      attr.type === "JSXAttribute" &&
      attr.name.type === "JSXIdentifier" &&
      attr.name.name === propName,
  );
}

/**
 * Get the static string value of a JSX attribute value, or null if dynamic.
 * @param {import('estree-jsx').JSXAttribute} attr
 * @returns {string | null}
 */
export function getStaticStringValue(attr) {
  if (!attr || attr.value === null) return null;
  if (attr.value.type === "Literal" && typeof attr.value.value === "string") {
    return attr.value.value;
  }
  if (attr.value.type === "JSXExpressionContainer") {
    const expr = attr.value.expression;
    if (expr.type === "Literal" && typeof expr.value === "string") {
      return expr.value;
    }
  }
  return null;
}

/**
 * Get the element type name string from a JSX opening element.
 * @param {import('estree-jsx').JSXOpeningElement} openingElement
 * @returns {string}
 */
export function getElementType(openingElement) {
  const name = openingElement.name;
  if (name.type === "JSXIdentifier") return name.name;
  if (name.type === "JSXMemberExpression") {
    return `${getElementType({ name: name.object })}.${name.property.name}`;
  }
  if (name.type === "JSXNamespacedName") {
    return `${name.namespace.name}:${name.name.name}`;
  }
  return "";
}

/**
 * Check if a JSX element name represents a DOM element (lowercase) vs component.
 * Member expressions like `<foo.bar />` are always components regardless of case.
 * @param {string} name
 * @returns {boolean}
 */
export function isDOMElement(name) {
  return (
    name.length > 0 && name[0] === name[0].toLowerCase() && !name.includes(".")
  );
}

/**
 * Check if a JSX element has children (either via children prop or nested elements).
 * @param {import('estree-jsx').JSXElement} node
 * @returns {boolean}
 */
export function hasChildren(node) {
  if (
    node.type === "JSXElement" &&
    node.children.some(
      (child) => child.type !== "JSXText" || child.value.trim() !== "",
    )
  ) {
    return true;
  }
  return !!getProp(node.openingElement, "children");
}
