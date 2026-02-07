import { kintone } from "../lib/kintone.js";
import { prettier } from "../lib/prettier.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...kintone(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);

export default configs;
