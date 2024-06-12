const base = require("../lib/base.js");
const node = require("../lib/node.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [
  ...base(),
  ...node(["**/*.{js,cjs,mjs,ts,tsx,jsx,mts,cts}"]),
  ...prettier(),
];
