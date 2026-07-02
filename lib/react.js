import jsxA11yPlugin from "eslint-plugin-jsx-a11y-x";
import hooksPlugin from "eslint-plugin-react-hooks";
import stylistic from "@stylistic/eslint-plugin";
import reactPlugin from "../plugins/react/index.js";

/**
 * @return { import("eslint").Linter.Config[] }
 */
export const react = () => {
  return [
    {
      plugins: { "react-hooks": hooksPlugin },
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
    {
      languageOptions: jsxA11yPlugin.configs.recommended.languageOptions,
      plugins: { "jsx-a11y-x": jsxA11yPlugin },
      rules: jsxA11yPlugin.configs.recommended.rules,
    },
    {
      plugins: {
        react: reactPlugin,
        "@stylistic": stylistic,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        // =======
        // React
        // =======

        // Prevent no-unused-vars false positives for JSX components
        "react/jsx-uses-vars": "error",

        // Error
        "react/jsx-key": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-target-blank": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/jsx-filename-extension": "error",
        "react/void-dom-elements-no-children": "error",
        "react/no-unknown-property": "error",
        "react/no-unstable-nested-components": "error",
        "react/jsx-no-undef": "error",
        "react/no-unescaped-entities": "error",
        "react/no-multi-comp": ["error", { ignoreStateless: true }],
        "react/style-prop-object": "error",

        // Warn
        "react/jsx-boolean-value": "warn",
        "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
        "react/jsx-no-useless-fragment": "warn",

        // =======
        // JSX formatting (eslint-plugin-stylistic)
        // =======
        "@stylistic/jsx-quotes": "error",
        "@stylistic/jsx-self-closing-comp": "warn",
        "@stylistic/jsx-curly-brace-presence": [
          "warn",
          { props: "never", children: "never" },
        ],
        "@stylistic/jsx-pascal-case": ["warn", { allowAllCaps: true }],
        "@stylistic/jsx-first-prop-new-line": "warn",
        "@stylistic/jsx-max-props-per-line": ["warn", { when: "multiline" }],

        // =======
        // a11y
        // =======

        // available in recommended but overwrite options
        "jsx-a11y-x/no-noninteractive-element-to-interactive-role": [
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
        "jsx-a11y-x/no-noninteractive-element-interactions": [
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
        "jsx-a11y-x/no-noninteractive-tabindex": [
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
        "jsx-a11y-x/no-static-element-interactions": [
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

        // available in recommended but turn off
        /** We disable this rule because this cannot detect patterns like <main role="main" />. */
        "jsx-a11y-x/no-redundant-roles": "off",
        /** There are unnecessary patterns such as dialog overlays.*/
        "jsx-a11y-x/click-events-have-key-events": "off",
      },
    },
  ];
};
