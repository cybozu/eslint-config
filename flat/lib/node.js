const nodePlugin = require("eslint-plugin-n");

/**
 * @param { {files?:string[]} |undefined}
 * @return { import("eslint").Linter.FlatConfig[] }
 */
module.exports = function node(overrides) {
  return [
    nodePlugin.configs["flat/recommended"],
    {
      files: overrides?.files,
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
