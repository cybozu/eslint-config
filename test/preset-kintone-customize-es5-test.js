import assert from "assert";
import { es5 } from "../lib/es5.js";
import kintoneEs5 from "../presets/kintone-customize-es5.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset kintone-customize-es5", () => {
  it("should be able to use kintone-customize-es5 as well as lib/es5 and lib/kintone", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("es5", es5()),
      await runLintWithFixtures("es5", kintoneEs5),
    );
  });
});
