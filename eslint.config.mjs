import globals from "globals";
import { defineConfig } from "eslint/config";
import presetReactTypeScriptPrettier from "./presets/react-typescript-prettier.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
export default defineConfig([
  ...presetReactTypeScriptPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
  {
    ignores: ["test/fixtures/*"],
  },
]);
