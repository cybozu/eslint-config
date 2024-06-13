const base = require("../lib/base.js");
const node = require("../lib/node.js");
const prettier = require("../lib/prettier.js");
const typescript = require("../lib/typescript.js");
const nodeTypescript = require("../lib/node-typescript.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [
  ...base(),
  ...node({ files: ["**/*.{js,cjs,mjs,ts,tsx,jsx,mts,cts}"] }),
  ...typescript({ files: ["**/*.{ts,cts,mts}"] }),
  ...nodeTypescript(),
  ...prettier(),
];
