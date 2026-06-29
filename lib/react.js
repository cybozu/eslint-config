import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactRecommendedConfig from "eslint-plugin-react/configs/recommended.js";
import reactJsxRuntimeConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import hooksPlugin from "eslint-plugin-react-hooks";

/**
 * @return { import("eslint").Linter.Config[] }
 */
export const react = () => {
  return [
    // Explicitly use the same eslint-plugin-react in each configuration object.
    {
      ...reactRecommendedConfig,
      plugins: { react: reactPlugin },
    },
    {
      ...reactJsxRuntimeConfig,
      plugins: { react: reactPlugin },
    },
    {
      ...hooksPlugin.configs.recommended,
      plugins: { "react-hooks": hooksPlugin },
    },
    {
      languageOptions: {
        parserOptions: jsxA11yPlugin.configs.recommended.parserOptions,
      },
      plugins: { "jsx-a11y": jsxA11yPlugin },
      rules: jsxA11yPlugin.configs.recommended.rules,
    },
    {
      plugins: {
        react: reactPlugin,
        "react-hooks": hooksPlugin,
        "jsx-a11y": jsxA11yPlugin,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        // This rules is in ESLint core
        "jsx-quotes": "error",

        // =======
        // React / Error
        // =======
        "react/no-access-state-in-setstate": "error",
        "react/no-danger": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-multi-comp": ["error", { ignoreStateless: true }],
        "react/no-redundant-should-component-update": "error",
        "react/no-typos": "error",
        "react/no-this-in-sfc": "error",
        "react/no-unstable-nested-components": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": [
          "error",
          { ignorePureComponents: true },
        ],
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",

        "react/jsx-filename-extension": "error",

        // =======
        // React / Warn
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
        "react/jsx-first-prop-new-line": "warn",
        "react/jsx-max-props-per-line": ["warn", { when: "multiline" }],
        "react/jsx-no-bind": ["warn", { allowArrowFunctions: true }],
        "react/jsx-curly-brace-presence": [
          "warn",
          { props: "never", children: "never" },
        ],
        "react/jsx-pascal-case": ["warn", { allowAllCaps: true }],
        "react/jsx-no-useless-fragment": "warn",

        // =======
        // a11y
        // =======

        // available in recommended but overwrite options
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

        // available in recommended but turn off
        /** We disable this rule because this cannot detect patterns like <main role=“main” />. */
        "jsx-a11y/no-redundant-roles": "off",
        /** There are unnecessary patterns such as dialog overlays.*/
        "jsx-a11y/click-events-have-key-events": "off",
      },
    },
  ];
};
