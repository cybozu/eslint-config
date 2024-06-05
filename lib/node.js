module.exports = {
  extends: ["plugin:n/recommended"],
  settings: {
    n: {
      // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/shared-settings.md#tryextensions
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
