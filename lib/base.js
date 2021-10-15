module.exports = {
  extends: ["eslint:recommended"],
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
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
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-lone-blocks": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
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
    "no-with": "error",
    "prefer-regex-literals": "error",
    radix: "error",
    "wrap-iife": ["error", "any"],
    // no-case-declarations
    // no-empty-pattern
    // no-fallthrough
    // no-global-assign
    // no-redeclare
    // no-self-assign
    // no-unused-labels
    // no-useless-escape

    // Possible Errors
    "no-async-promise-executor": "error",
    "no-extra-parens": ["error", "functions"],
    "no-import-assign": "error",
    "require-atomic-updates": "error",
    "valid-typeof": [
      "error",
      {
        requireStringLiterals: true,
      },
    ],
    // for-direction
    // getter-return
    // no-compare-neg-zero
    // no-cond-assign
    // no-constant-condition
    // no-control-regex
    // no-debugger
    // no-dupe-args
    // no-dupe-keys
    // no-duplicate-case
    // no-empty
    // no-empty-character-class
    // no-ex-assign
    // no-extra-boolean-cast
    // no-extra-semi
    // no-func-assign
    // no-invalid-regexp
    // no-irregular-whitespace
    // no-obj-calls
    // no-regex-spaces
    // no-sparse-arrays
    // no-unexpected-multiline
    // no-unreachable
    // no-unsafe-finally
    // no-unsafe-negation
    // use-isnan

    // Variables
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
      },
    ],
    // no-delete-var
    // no-undef

    // ECMAScript6
    "generator-star-spacing": ["error", "after"],
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true,
      },
    ],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": ["error", "after"],
    // constructor-super
    // no-class-assign
    // no-const-assign
    // no-dupe-class-members
    // no-new-symbol
    // no-this-before-super
    // require-yield

    // Stylistic Issues
    "func-call-spacing": "error",
    "new-parens": "error",
    "no-new-object": "error",
    "no-tabs": "error",
    // no-mixed-spaces-and-tabs

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

    // eslint-plugin-import
    "import/no-duplicates": "warn",

    // =====
    // None
    // =====

    // Best Practices
    // accessor-pairs
    // class-methods-use-this
    // complexity
    // default-case
    // no-alert
    // no-eq-null
    // no-extra-bind // This rules can't detect in some cases so we enable it
    // no-implicit-coercion
    // no-labels
    // no-magic-numbers
    // max-classes-per-file
    // no-native-reassign (deprecated)
    // no-new
    // no-restricted-properties
    // no-useless-catch
    // no-warning-comments
    // prefer-promise-reject-errors
    // require-await

    // Possible Errors
    // no-await-in-loop
    // no-console
    // no-prototype-builtins
    // valid-jsdoc

    // Variables
    // init-declarations
    // no-restricted-globals
    // no-undefined
    // no-use-before-define

    // Strict
    // strict

    // ECMAScript6
    // object-shorthand hard to determine a rule between products
    // prefer-destructuring
    // prefer-reflect
    // prefer-template
    // sort-imports

    // Stylistic Issues
    // array-bracket-newline
    // array-element-newline
    // camelcase
    // capitalized-comments
    // comma-dangle TODO
    // consistent-this
    // eol-last
    // function-paren-newline
    // func-name-matching
    // func-names
    // func-style
    // id-blacklist
    // id-length
    // id-match
    // implicit-arrow-linebreak
    // indent-legacy
    // line-comment-position
    // lines-around-comment
    // lines-around-directive
    // lines-between-class-members
    // max-lines
    // max-lines-per-function
    // max-params
    // max-statements-per-line
    // multiline-comment-style
    // multiline-ternary
    // newline-after-var
    // newline-before-return
    // newline-per-chained-call
    // no-mixed-operators
    // no-bitwise
    // no-continue
    // no-inline-comments
    // no-multi-assign
    // no-negated-condition
    // prefer-named-capture-group
    // prefer-object-spread
    // no-plusplus
    // no-restricted-syntax
    // no-ternary
    // no-underscore-dangle
    // object-curly-newline
    // one-var
    // operator-linebreak
    // padded-blocks
    // padding-line-between-statements
    // quote-props
    // require-jsdoc
    // sort-keys
    // sort-vars
    // wrap-regex
  },
};
