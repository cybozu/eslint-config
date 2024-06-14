const nodePlugin = require("eslint-plugin-n");

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function nodeTypescript() {
  return [
    {
      languageOptions: {
        ecmaVersion: "latest",
      },
      plugins: { n: nodePlugin },
      rules: {
        "n/no-unsupported-features/es-syntax": "off",
      },
    },
  ];
};
