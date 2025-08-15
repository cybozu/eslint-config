const es5 = require("../lib/es5.js");
const kintoneEs5 = require("../lib/kintone-es5.js");
const kintoneGlobals = require("../globals/kintone.js");
const prettier = require("../lib/prettier.js");
const attachFilesPropForConfig = require("../utils/attachFilesPropForConfig.js");

/**
 * @type { import("eslint").Linter.Config[] }
 */
module.exports = attachFilesPropForConfig(
  [...es5({ overrideGlobals: kintoneGlobals }), ...kintoneEs5(), ...prettier()],
  ["**/*.{js,cjs,ts,cts,jsx,tsx}"],
);
