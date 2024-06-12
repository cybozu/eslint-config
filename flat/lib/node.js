const nodePlugin = require("eslint-plugin-n");

/**
 * @param { string[] } files
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function node(files) {
  return [
    { ...nodePlugin.configs["flat/recommended-script"], files },
    {
      files,
      settings: {
        n: {
          // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/shared-settings.md#tryextensions
          tryExtensions: [".js", ".json", ".node", ".ts", ".jsx", ".tsx"],
        },
      },
      rules: {
        "no-console": "off",
      },
      languageOptions: {
        ecmaVersion: "latest",
      },
    },
  ];
};
