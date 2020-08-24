module.exports = {
  parser: "babel-eslint",
  plugins: ["flowtype"],
  extends: ["plugin:flowtype/recommended"],
  rules: {
    // =======
    // Error
    // =======
    // flowtype/boolean-style
    // flowtype/generic-spacing
    "flowtype/no-dupe-keys": "error",
    "flowtype/no-primitive-constructor-types": "error",
    // flowtype/no-types-missing-file-annotation
    "flowtype/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "flowtype/object-type-delimiter": ["error", "comma"],
    // flowtype/space-after-type-colon
    // flowtype/space-before-generic-bracket
    // flowtype/space-before-type-colon
    "flowtype/type-id-match": ["error", "^[A-Z][a-zA-Z0-9]*$"],
    // flowtype/union-intersection-spacing

    // =======
    // Warn
    // =======
    // flowtype/define-flow-type
    "flowtype/semi": "warn",
    // flowtype/use-flow-type

    // =======
    // None
    // =======
    // flowtype/delimiter-dangle
    // flowtype/no-flow-fix-me-comments
    // flowtype/no-mutable-array
    // flowtype/no-weak-types
    // flowtype/require-exact-type
    // flowtype/require-parameter-type
    // flowtype/require-valid-file-annotation
    // flowtype/require-variable-type
    // flowtype/sort-keys
  },
};
