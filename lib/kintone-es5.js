import globals from "globals";
import { kintoneGlobals } from "../globals/kintone.js";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const kintoneEs5 = () => {
  return [
    {
      languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",
        globals: {
          ...globals.browser,
          ...kintoneGlobals,
        },
      },
      rules: {
        strict: ["error", "function"],
      },
    },
  ];
};
