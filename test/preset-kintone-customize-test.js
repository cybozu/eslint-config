import assert from "assert";
import kintoneCustomize from "../presets/kintone-customize.js";
import base from "../presets/base.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset kintone-customize", () => {
  it("should be able to use kintone-customize as well as preset/base", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("base", base),
      await runLintWithFixtures("base", kintoneCustomize),
    );
  });
  it("should get expected errors and warninigs with kintone globals", async () => {
    const result = await runLintWithFixtures(
      "globals-kintone",
      kintoneCustomize,
    );
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-undef"],
        warnings: ["spaced-comment"],
      },
      "ok.js": {
        warnings: ["spaced-comment"],
      },
    });
  });
});
