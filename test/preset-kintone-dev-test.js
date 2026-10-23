import { describe, it } from "node:test";
import assert from "assert";
import kintoneDev from "../presets/kintone-dev.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("preset kintone-dev", () => {
  it("should get expected errors", async () => {
    const result = await runLintWithFixtures("kintone-dev", kintoneDev);
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["kintone/require-identifier-prefix"],
      },
      "ok.js": {},
    });
  });
});
