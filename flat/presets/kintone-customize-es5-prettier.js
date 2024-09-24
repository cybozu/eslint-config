const es5 = require("../lib/es5.js");
const kintone = require("../lib/kintone.js");
const prettier = require("../lib/prettier.js");
const kintoneGlobals = require("../globals/kintone.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,jsx}"] },
  ...es5(kintoneGlobals),
  ...kintone(),
  ...prettier(),
];
