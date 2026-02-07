import { es5 } from "../lib/es5.js";
import { kintoneEs5 } from "../lib/kintone-es5.js";
import { kintoneGlobals } from "../globals/kintone.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...es5({ overrideGlobals: kintoneGlobals }), ...kintoneEs5()],
  ["**/*.{js,cjs,ts,cts,jsx,tsx}"],
);

export default configs;
