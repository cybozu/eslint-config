const kintone = require("../lib/kintone.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"] },
  ...kintone(),
];
