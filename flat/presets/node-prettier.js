const base = require("../lib/base.js");
const node = require("../lib/node.js");
const prettier = require("../lib/prettier.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,ts,tsx,jsx,mts,cts}"] },
  ...base(),
  ...node(),
  ...prettier(),
];
