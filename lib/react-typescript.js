module.exports = {
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": ["off", {}],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
      },
    },
  ],
};
