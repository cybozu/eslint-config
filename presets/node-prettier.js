import { base } from "../lib/base.js";
import { node } from "../lib/node.js";
import { prettier } from "../lib/prettier.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...node(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,tsx,jsx,mts,cts}"],
);

export default configs;
