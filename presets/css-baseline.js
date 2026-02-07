import { cssBaseline } from "../lib/css-baseline.js";
import { attachFilesPropForConfig } from "../utils/attachFilesPropForConfig.js";

/**
 * @type { import("eslint").Linter.Config[] }
 */
const configs = attachFilesPropForConfig([...cssBaseline()], ["**/*.css"]);

export default configs;
