import reactPlugin from "../plugins/react/index.js";

/**
 * @return { import("eslint").Linter.Config[] }
 */
export const reactTypescript = () => {
  return [
    {
      plugins: { react: reactPlugin },
      rules: {
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      },
    },
  ];
};
