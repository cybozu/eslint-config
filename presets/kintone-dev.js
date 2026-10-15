import { kintoneDev } from "../lib/kintone-dev.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

// Add-on preset: enables the custom rules for developing kintone.
// It does not include `base`, so use it together with another preset:
//
//   import reactTypescript from "@cybozu/eslint-config/presets/react-typescript";
//   import kintoneDev from "@cybozu/eslint-config/presets/kintone-dev";
//   export default [...reactTypescript, ...kintoneDev];

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig(
  [...kintoneDev()],
  ["**/*.{js,cjs,mjs,ts,mts,cts,jsx,tsx}"],
);

export default configs;
