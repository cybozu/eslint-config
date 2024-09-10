const presetReactTypeScriptPrettier = require("./flat/presets/react-typescript-prettier.js");
const globals = require("globals");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
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
];
