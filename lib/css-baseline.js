import cssPlugin from "@eslint/css";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const cssBaseline = () => {
  return [
    {
      plugins: {
        css: cssPlugin,
      },
      language: "css/css",
      // the same error recovery algorithm as the browser
      // https://eslint.org/blog/2025/02/eslint-css-support/#tolerant-parsing-support
      languageOptions: {
        tolerant: true,
      },
      rules: {
        "css/no-duplicate-imports": "error",

        // Lint CSS files to ensure they are using
        // only Baseline Widely available features:
        "css/use-baseline": [
          "warn",
          {
            available: "widely",
          },
        ],
      },
    },
  ];
};
