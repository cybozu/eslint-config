const base = require("./base");
const globals = require("globals");
const eslint = require("@eslint/js");

const baseRules = base()[2].rules;

// This rule can be parsed with ES5
delete baseRules["import-x/no-duplicates"];

/**
 * @param {{ overrideGlobals?: import("eslint").ESLint.Globals} | undefined} overrides
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function es5(overrides) {
  return [
    eslint.configs.recommended,
    {
      languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",
        globals: {
          ...globals.browser,
          ...globals.commonjs,
          ...overrides?.overrideGlobals,
        },
      },
      rules: Object.assign({}, baseRules, {
        // Disable all rules about ES6
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": "off",
        "constructor-super": "off",
        "generator-star-spacing": "off",
        "no-class-assign": "off",
        "no-confusing-arrow": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "off",
        "no-new-symbol": "off",
        "no-restricted-imports": "off",
        "no-this-before-super": "off",
        "no-useless-computed-key": "off",
        "no-useless-constructor": "off",
        "no-useless-rename": "off",
        "no-var": "off",
        "object-shorthand": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-numeric-literals": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "require-yield": "off",
        "rest-spread-spacing": "off",
        "sort-imports": "off",
        "symbol-description": "off",
        "template-curly-spacing": "off",
        "yield-star-spacing": "off",
      }),
    },
  ];
};
