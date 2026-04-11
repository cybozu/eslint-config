import assert from "assert";
import kintoneCustomizePrettier from "../presets/kintone-customize-prettier.js";
import prettier from "../presets/prettier.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset kintone-customize-prettier", () => {
  it("should be able to use kintone-customize as well as preset/prettier", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("prettier", prettier),
      await runLintWithFixtures("prettier", kintoneCustomizePrettier),
    );
  });
});
