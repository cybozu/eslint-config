const base = require("../lib/base.js");
const react = require("../lib/react.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  ...base(),
  ...react(),
  ...prettier(),
];
