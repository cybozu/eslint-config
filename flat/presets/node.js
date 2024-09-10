const base = require("../lib/base.js");
const node = require("../lib/node.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"] },
  ...base(),
  ...node(),
];
