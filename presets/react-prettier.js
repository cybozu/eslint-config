import { base } from "../lib/base.js";
import { react } from "../lib/react.js";
import { prettier } from "../lib/prettier.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...react(), ...prettier()],
  ["**/*.{js,mjs,cjs,jsx}"],
);

export default configs;
