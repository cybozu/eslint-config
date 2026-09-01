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
        // Injected by test/setup.mjs (see the `test` npm script)
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
  },
  {
    ignores: ["test/fixtures/*"],
  },
]);
