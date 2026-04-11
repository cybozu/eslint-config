import assert from "assert";
import { kintone } from "../lib/kintone.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat kintone", () => {
  it("should be able to use kintone-customize as well as lib/kintone", async () => {
    assert.deepStrictEqual(
      await runLintWithFixtures("globals-kintone", kintone()),
      {
        "ok.js": { warnings: ["spaced-comment"] },
        "error.js": {
          errors: ["no-undef"],
          warnings: ["spaced-comment"],
        },
      },
    );
  });
});
