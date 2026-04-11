import globals from "globals";
import importPlugin from "eslint-plugin-import-x";
import eslint from "@eslint/js";

/**
 * @param {{ overrideGlobals?: import("eslint").ESLint.Globals} | undefined} overrides
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const base = (overrides) => {
  return [
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: overrides?.overrideGlobals
          ? overrides.overrideGlobals
          : {
              ...globals.browser,
              ...globals.es2024,
              ...globals.commonjs,
            },
      },
    },
    eslint.configs.recommended,
    {
      plugins: {
        "import-x": importPlugin,
        "@stylistic": stylistic,
      },
      rules: {
        // =======
        // Error
        // =======

        // Best Practices
        "default-param-last": "error",
        "no-caller": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        "no-useless-concat": "error",
        "no-void": "error",
        "prefer-regex-literals": "error",
        radix: "error",

        // Possible Errors
        "require-atomic-updates": "error",
        "valid-typeof": [
          "error",
          {
            requireStringLiterals: true,
          },
        ],

        // Variables
        "no-label-var": "error",
        "no-shadow": "error",
        "no-unused-vars": [
          "error",
          {
            vars: "local",
            args: "none",
          },
        ],

        // ECMAScript6
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "prefer-numeric-literals": "error",
        "prefer-rest-params": "error",
        "symbol-description": "error",
        "no-object-constructor": "error",

        // ====
        // Warn (these are enabled for testing, which will cause many warinings)
        // ====

        // Best Practices
        "array-callback-return": "warn",
        "block-scoped-var": "warn",
        "consistent-return": "warn", // TODO
        curly: ["warn", "multi-line"],
        "dot-location": ["warn", "property"],
        "dot-notation": "warn",
        eqeqeq: [
          "warn",
          "always",
          {
            null: "ignore",
          },
        ],
        "guard-for-in": "warn",
        "no-div-regex": "warn",
        "no-else-return": "warn",
        "no-empty-function": [
          "warn",
          {
            allow: ["arrowFunctions", "functions", "methods"],
          },
        ],
        "no-extra-label": "warn",
        "no-invalid-this": "warn",
        "no-loop-func": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-param-reassign": "warn",
        "no-script-url": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-useless-call": "warn",
        "no-useless-return": "warn",
        "vars-on-top": "warn",
        yoda: "warn",

        // Possible Errors
        "no-inner-declarations": "warn",
        "no-template-curly-in-string": "warn",

        // Variables
        "no-undef-init": "warn",

        // ECMAScript6
        "no-useless-constructor": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": [
          "warn",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true,
          },
        ],
        "prefer-spread": "warn",
        "rest-spread-spacing": "warn",

        // Stylistic Issues
        "array-bracket-spacing": "warn",
        "block-spacing": "warn",
        "brace-style": "warn",
        "comma-spacing": "warn",
        "comma-style": "warn",
        "computed-property-spacing": "warn",
        indent: ["warn", 2, { SwitchCase: 1 }],
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "linebreak-style": "warn",
        "max-depth": "warn",
        "max-len": ["warn", 150],
        "max-nested-callbacks": ["warn", 5],
        "max-params": ["warn", 7],
        "max-statements": ["warn", 40],
        "new-cap": ["warn", { capIsNewExceptions: ["Deferred"] }],
        "no-array-constructor": "warn",
        "no-lonely-if": "warn",
        "no-multiple-empty-lines": [
          "warn",
          {
            max: 2,
            maxEOF: 1,
          },
        ],
        "no-nested-ternary": "warn",
        "no-trailing-spaces": "warn",
        "no-unneeded-ternary": "warn",
        "no-whitespace-before-property": "warn",
        "nonblock-statement-body-position": "warn",
        "object-curly-spacing": "warn",
        "object-property-newline": [
          "warn",
          {
            allowAllPropertiesOnSameLine: true,
          },
        ],
        "one-var-declaration-per-line": "warn",
        "operator-assignment": "warn",
        quotes: [
          "warn",
          "single",
          {
            allowTemplateLiterals: true,
          },
        ],
        semi: "warn",
        "semi-spacing": "warn",
        "semi-style": "warn",
        "space-before-blocks": "warn",
        "space-before-function-paren": [
          "warn",
          {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
          },
        ],
        "space-in-parens": "warn",
        "space-infix-ops": "warn",
        "space-unary-ops": "warn",
        "spaced-comment": "warn",
        "switch-colon-spacing": "warn",
        "template-tag-spacing": "warn",
        "unicode-bom": "warn",

        // eslint-plugin-import-x
        "import-x/no-duplicates": "warn",

        // eslint-plugin-stylistic
        "@stylistic/no-floating-decimal": "error",
        "@stylistic/wrap-iife": ["error", "any"],
        "@stylistic/no-extra-parens": ["error", "functions"],
        "@stylistic/generator-star-spacing": ["error", "after"],
        "@stylistic/no-confusing-arrow": [
          "error",
          {
            allowParens: true,
          },
        ],
        "@stylistic/template-curly-spacing": "error",
        "@stylistic/yield-star-spacing": ["error", "after"],
        "@stylistic/function-call-spacing": "error",
        "@stylistic/new-parens": "error",
        "@stylistic/no-tabs": "error",
      },
    },
  ];
};
