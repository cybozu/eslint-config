import jsxUsesVars from "./rules/jsx-uses-vars.js";
import jsxKey from "./rules/jsx-key.js";
import jsxNoDuplicateProps from "./rules/jsx-no-duplicate-props.js";
import jsxNoTargetBlank from "./rules/jsx-no-target-blank.js";
import noChildrenProp from "./rules/no-children-prop.js";
import noDanger from "./rules/no-danger.js";
import noDangerWithChildren from "./rules/no-danger-with-children.js";
import jsxFilenameExtension from "./rules/jsx-filename-extension.js";
import voidDomElementsNoChildren from "./rules/void-dom-elements-no-children.js";
import jsxBooleanValue from "./rules/jsx-boolean-value.js";
import jsxPascalCase from "./rules/jsx-pascal-case.js";
import jsxCurlyBracePresence from "./rules/jsx-curly-brace-presence.js";
import jsxNoUselessFragment from "./rules/jsx-no-useless-fragment.js";
import jsxNoBind from "./rules/jsx-no-bind.js";
import selfClosingComp from "./rules/self-closing-comp.js";
import jsxFirstPropNewLine from "./rules/jsx-first-prop-new-line.js";
import jsxMaxPropsPerLine from "./rules/jsx-max-props-per-line.js";
import jsxNoUndef from "./rules/jsx-no-undef.js";
import noUnescapedEntities from "./rules/no-unescaped-entities.js";
import noMultiComp from "./rules/no-multi-comp.js";
import noUnstableNestedComponents from "./rules/no-unstable-nested-components.js";
import noUnknownProperty from "./rules/no-unknown-property.js";
import stylePropObject from "./rules/style-prop-object.js";

/** @type {import('eslint').ESLint.Plugin} */
const reactPlugin = {
  rules: {
    "jsx-uses-vars": jsxUsesVars,
    "jsx-key": jsxKey,
    "jsx-no-duplicate-props": jsxNoDuplicateProps,
    "jsx-no-target-blank": jsxNoTargetBlank,
    "no-children-prop": noChildrenProp,
    "no-danger": noDanger,
    "no-danger-with-children": noDangerWithChildren,
    "jsx-filename-extension": jsxFilenameExtension,
    "void-dom-elements-no-children": voidDomElementsNoChildren,
    "jsx-boolean-value": jsxBooleanValue,
    "jsx-pascal-case": jsxPascalCase,
    "jsx-curly-brace-presence": jsxCurlyBracePresence,
    "jsx-no-useless-fragment": jsxNoUselessFragment,
    "jsx-no-bind": jsxNoBind,
    "self-closing-comp": selfClosingComp,
    "jsx-first-prop-new-line": jsxFirstPropNewLine,
    "jsx-max-props-per-line": jsxMaxPropsPerLine,
    "jsx-no-undef": jsxNoUndef,
    "no-unescaped-entities": noUnescapedEntities,
    "no-multi-comp": noMultiComp,
    "no-unstable-nested-components": noUnstableNestedComponents,
    "no-unknown-property": noUnknownProperty,
    "style-prop-object": stylePropObject,
  },
};

export default reactPlugin;
