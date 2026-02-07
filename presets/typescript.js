import { base } from "../lib/base.js";
import { typescript } from "../lib/typescript.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...typescript()],
  ["**/*.{js,cjs,mjs,ts,cts,mts}"],
);

export default configs;
