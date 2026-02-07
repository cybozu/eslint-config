import reactPlugin from "eslint-plugin-react";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const reactTypescript = () => {
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
