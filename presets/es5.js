import { es5 } from "../lib/es5.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...es5()],
  ["**/*.{js,cjs,ts,cts,jsx,tsx}"],
);

export default configs;
