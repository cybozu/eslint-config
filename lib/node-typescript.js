import nodePlugin from "eslint-plugin-n";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const nodeTypescript = () => {
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
