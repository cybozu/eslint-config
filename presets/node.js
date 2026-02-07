import { base } from "../lib/base.js";
import { node } from "../lib/node.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...node()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);

export default configs;
