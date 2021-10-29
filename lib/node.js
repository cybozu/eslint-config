module.exports = {
  extends: ["plugin:node/recommended"],
  settings: {
    node: {
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#tryextensions
      tryExtensions: [".js", ".json", ".node", ".ts", ".jsx", ".tsx"],
    },
  },
  rules: {
    "no-console": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
