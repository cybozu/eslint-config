import { base } from "../lib/base.js";
import { react } from "../lib/react.js";
import { typescript } from "../lib/typescript.js";
import { reactTypescript } from "../lib/react-typescript.js";
import { prettier } from "../lib/prettier.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...react(), ...reactTypescript(), ...typescript(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
);

export default configs;
