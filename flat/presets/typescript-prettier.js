const base = require("../lib/base.js");
const prettier = require("../lib/prettier.js");
const typescript = require("../lib/typescript.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,ts,cts,mts}"] },
  ...base(),
  ...typescript(),
  ...prettier(),
];
