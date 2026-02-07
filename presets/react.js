import { base } from "../lib/base.js";
import { react } from "../lib/react.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...react()],
  ["**/*.{js,cjs,mjs,jsx}"],
);

export default configs;
