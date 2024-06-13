const base = require("../lib/base.js");
const node = require("../lib/node.js");

/**
 * @type { import("eslint").Linter.FlatConfig[] }
 */
module.exports = [
  ...base(),
  ...node({ files: ["**/*.{js,cjs,mjs,ts,tsx,jsx,mts,cts}"] }),
];
