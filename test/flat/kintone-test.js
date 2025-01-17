const assert = require("assert");
const kintone = require("../../flat/lib/kintone");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat kintone", () => {
  it("should be able to use kintone-customize as well as lib/kintone", async () => {
    assert.deepStrictEqual(
      await runLintWithFixturesFlat("globals-kintone", kintone()),
      {
        "ok.js": { warnings: ["spaced-comment"] },
        "error.js": {
          errors: ["no-undef"],
          warnings: ["spaced-comment"],
        },
      }
    );
  });
});
