import kintonePlugin from "../plugins/kintone/index.js";

/**
 * @return { import("eslint").Linter.Config[] }
 */
export const kintoneDev = () => {
  return [
    {
      plugins: { kintone: kintonePlugin },
      rules: {
        "kintone/require-identifier-prefix": "error",
      },
    },
  ];
};
