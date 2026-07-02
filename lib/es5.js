import { base } from "./base.js";
import globals from "globals";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

const baseRules = base()[2].rules;

// This rule can be parsed with ES5
delete baseRules["import-x/no-duplicates"];

/**
 * @param {{ overrideGlobals?: import("eslint").ESLint.Globals} | undefined} overrides
 * @return { import("eslint").Linter.Config[] }
 */
export const es5 = (overrides) => {
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
      plugins: {
        "@stylistic": stylistic,
      },
      rules: Object.assign({}, baseRules, {
        // Disable all rules about ES6
        "arrow-body-style": "off",
        "constructor-super": "off",
        "no-class-assign": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "off",
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
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "require-yield": "off",
        "sort-imports": "off",
        "symbol-description": "off",
        // @stylistic equivalents for ES6 rules
        "@stylistic/generator-star-spacing": "off",
        "@stylistic/no-confusing-arrow": "off",
        "@stylistic/rest-spread-spacing": "off",
        "@stylistic/template-curly-spacing": "off",
        "@stylistic/yield-star-spacing": "off",
      }),
    },
  ];
};
