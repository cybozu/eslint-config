module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // =======
    // Error
    // =======
    // This rules is in ESLint core
    "jsx-quotes": "error",

    // react/display-name
    "react/no-access-state-in-setstate": "error",
    // react/no-children-prop
    // react/no-danger-with-children
    // react/no-deprecated
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    // react/no-direct-mutation-state
    // react/no-find-dom-node
    // react/no-is-mounted
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-redundant-should-component-update": "error",
    // react/no-render-return-value
    "react/no-typos": "error",
    // react/no-string-refs
    "react/no-this-in-sfc": "error",
    // react/no-unescaped-entities
    // react/no-unknown-property
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "error",
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true },
    ],
    // react/prop-types too strict?
    // react/react-in-jsx-scope
    // react/require-render-return
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    "react/jsx-filename-extension": "error",

    // react/jsx-key
    // react/jsx-no-duplicate-props
    // react/jsx-no-target-blank
    // react/jsx-no-undef
    // react/jsx-uses-react
    // react/jsx-uses-vars

    // =======
    // Warn
    // =======
    "react/no-unused-state": "warn",
    "react/self-closing-comp": "warn",
    "react/sort-comp": [
      "warn",
      {
        order: [
          "type-annotations",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],

    "react/jsx-boolean-value": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-spacing": "warn",
    "react/jsx-equals-spacing": "warn",
    "react/jsx-first-prop-new-line": "warn",
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
    "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "react/jsx-pascal-case": ["warn", { allowAllCaps: true }],
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-tag-spacing": [
      "warn",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
      },
    ],
    "react/jsx-wrap-multilines": "warn",
    "react/jsx-no-useless-fragment": "warn",

    // =======
    // None
    // =======
    // react/boolean-prop-naming
    // react/button-has-type
    // react/default-props-match-prop-types
    // react/destructuring-assignment
    // react/forbid-component-props
    // react/forbid-dom-props
    // react/forbid-elements
    // react/forbid-prop-types
    // react/forbid-foreign-prop-types
    // react/no-array-index-key
    // react/no-danger
    // react/no-set-state
    // react/no-unused-prop-types doesn't track destructuring and assignment props so we are disable this.
    // react/no-unused-prop-types
    // react/no-unsafe
    // react/require-default-props
    // react/require-optimization
    // react/sort-prop-type
    // react/state-in-constructor

    // react/jsx-child-element-spacing
    // react/jsx-handler-names
    // react/jsx-max-depth
    // react/jsx-no-comment-textnodes
    // react/jsx-no-literals
    // react/jsx-one-expression-per-line
    // react/jsx-props-no-spreading
    // react/jsx-sort-default-props
    // react/jsx-sort-props
    // react/jsx-space-before-closing deprecated

    // =======
    // Hooks
    // =======
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // =======
    // a11y
    // =======
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      /** Overwrite prohibited.
       * Add the following whitelist to address W3C best practices. For example, the dropdown sample used <ul role="listbox">, <li role="option">.
       * See: https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
       */
      {
        ul: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        ol: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        li: ["option", "menuitem", "row", "tab", "treeitem"],
        table: ["grid"],
        td: ["gridcell"],
      },
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      /** We must not assign the following events to non-interactive elements (eg img, h1, li ...) because avoid creating parts that cannot be handled with keyboards and mobile terminals. */
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "jsx-a11y/no-static-element-interactions": [
      "error",
      /** We must not assign the following events to static elements because avoid creating parts that cannot be handled with keyboards and mobile terminals. */
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/autocomplete-valid": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      /** Overwrite prohibited.
       * We add a whitelist to allow focus on tab panels and dialogs.
       * See: https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
       */
      {
        tags: [],
        roles: ["dialog", "tabpanel"],
      },
    ],
    /** We disable this rule because this cannot detect patterns like <main role=“main” />. */
    "jsx-a11y/no-redundant-roles": "off",
    /** There are unnecessary patterns such as dialog overlays.*/
    "jsx-a11y/click-events-have-key-events": "off",
  },
};
