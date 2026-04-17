import { base } from "../lib/base.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);

export default configs;
