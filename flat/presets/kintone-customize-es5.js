const es5 = require("../lib/es5.js");
const kintoneEs5 = require("../lib/kintone-es5.js");
const kintoneGlobals = require("../globals/kintone.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = [
  { files: ["**/*.{js,cjs,mjs,jsx}"] },
  ...es5({ overrideGlobals: kintoneGlobals }),
  ...kintoneEs5(),
];
