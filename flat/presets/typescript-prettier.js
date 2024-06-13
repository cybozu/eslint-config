const base = require("../lib/base.js");
const prettier = require("../lib/prettier.js");
const typescript = require("../lib/typescript.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [
  ...base(),
  ...typescript({ files: ["**/*.{ts,cts,mts}"] }),
  ...prettier(),
];
