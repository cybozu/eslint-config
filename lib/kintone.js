import globals from "globals";
import { kintoneGlobals } from "../globals/kintone.js";
import { base } from "./base.js";

/**
 * @return { import("eslint").Linter.FlatConfig[] }
 */
export const kintone = () => {
  return base({
    overrideGlobals: {
      ...globals.browser,
      ...globals.es2024,
      ...kintoneGlobals,
    },
  });
};
