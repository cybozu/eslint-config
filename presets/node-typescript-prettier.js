import { base } from "../lib/base.js";
import { node } from "../lib/node.js";
import { prettier } from "../lib/prettier.js";
import { typescript } from "../lib/typescript.js";
import { nodeTypescript } from "../lib/node-typescript.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...base(), ...node(), ...typescript(), ...nodeTypescript(), ...prettier()],
  ["**/*.{js,cjs,mjs,ts,cts,mts,jsx,tsx}"],
);

export default configs;
