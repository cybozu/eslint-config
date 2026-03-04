import globals from "globals";
import importPlugin from "eslint-plugin-import-x";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";

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

        // Possible Problems
        "no-self-compare": "error",
        "no-unused-vars": [
          "error",
          {
            vars: "local",
            args: "none",
          },
        ],
        "require-atomic-updates": "error",
        "valid-typeof": [
          "error",
          {
            requireStringLiterals: true,
          },
        ],

        // Suggestions
        "default-param-last": "error",
        "no-caller": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-lone-blocks": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-object-constructor": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ],
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "no-void": "error",
        "prefer-numeric-literals": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        radix: "error",
        "symbol-description": "error",

        // ====
        // Warn (these are enabled for testing, which will cause many warinings)
        // ====

        // Possible Problems
        "array-callback-return": "warn",
        "no-inner-declarations": "warn",
        "no-template-curly-in-string": "warn",
        "no-unmodified-loop-condition": "warn",

        // Suggestions
        "block-scoped-var": "warn",
        "consistent-return": "warn",
        curly: ["warn", "multi-line"],
        "dot-notation": "warn",
        eqeqeq: [
          "warn",
          "always",
          {
            null: "ignore",
          },
        ],
        "guard-for-in": "warn",
        "max-depth": "warn",
        "max-nested-callbacks": ["warn", 5],
        "max-params": ["warn", 7],
        "max-statements": ["warn", 40],
        "new-cap": ["warn", { capIsNewExceptions: ["Deferred"] }],
        "no-array-constructor": "warn",
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
        "no-lonely-if": "warn",
        "no-loop-func": "warn",
        "no-multi-str": "warn",
        "no-nested-ternary": "warn",
        "no-param-reassign": "warn",
        "no-script-url": "warn",
        "no-undef-init": "warn",
        "no-unneeded-ternary": "warn",
        "no-useless-call": "warn",
        "no-useless-constructor": "warn",
        "no-useless-return": "warn",
        "operator-assignment": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": [
          "warn",
          {
            destructuring: "all",
            ignoreReadBeforeAssign: true,
          },
        ],
        "prefer-spread": "warn",
        "vars-on-top": "warn",
        yoda: "warn",

        // Layout & Formatting
        "unicode-bom": "warn",

        // =======
        // rules from plugins
        // =======

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
        "@stylistic/dot-location": ["warn", "property"],
        "@stylistic/no-multi-spaces": "warn",
        "@stylistic/rest-spread-spacing": "warn",
        "@stylistic/array-bracket-spacing": "warn",
        "@stylistic/block-spacing": "warn",
        "@stylistic/brace-style": "warn",
        "@stylistic/comma-spacing": "warn",
        "@stylistic/comma-style": "warn",
        "@stylistic/computed-property-spacing": "warn",
        "@stylistic/indent": ["warn", 2, { SwitchCase: 1 }],
        "@stylistic/key-spacing": "warn",
        "@stylistic/keyword-spacing": "warn",
        "@stylistic/linebreak-style": "warn",
        "@stylistic/max-len": ["warn", 150],
        "@stylistic/no-multiple-empty-lines": [
          "warn",
          {
            max: 2,
            maxEOF: 1,
          },
        ],
        "@stylistic/no-trailing-spaces": "warn",
        "@stylistic/no-whitespace-before-property": "warn",
        "@stylistic/nonblock-statement-body-position": "warn",
        "@stylistic/object-curly-spacing": "warn",
        "@stylistic/object-property-newline": [
          "warn",
          {
            allowAllPropertiesOnSameLine: true,
          },
        ],
        "@stylistic/one-var-declaration-per-line": "warn",
        "@stylistic/quotes": [
          "warn",
          "single",
          {
            allowTemplateLiterals: true,
          },
        ],
        "@stylistic/semi": "warn",
        "@stylistic/semi-spacing": "warn",
        "@stylistic/semi-style": "warn",
        "@stylistic/space-before-blocks": "warn",
        "@stylistic/space-before-function-paren": [
          "warn",
          {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
          },
        ],
        "@stylistic/space-in-parens": "warn",
        "@stylistic/space-infix-ops": "warn",
        "@stylistic/space-unary-ops": "warn",
        "@stylistic/spaced-comment": "warn",
        "@stylistic/switch-colon-spacing": "warn",
        "@stylistic/template-tag-spacing": "warn",
      },
    },
  ];
};
