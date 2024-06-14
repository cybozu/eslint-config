const reactPlugin = require("eslint-plugin-react");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function reactTypescript() {
  return [
    {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: { react: reactPlugin },
      rules: {
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "react/prop-types": ["off", {}],
      },
    },
  ];
};
