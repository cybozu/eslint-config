const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("kintone", () => {
  it("should get expected errors and warninigs with kintone config", async () => {
    const result = await runLintWithFixtures(
      "globals-kintone",
      "globals/kintone.js",
    );
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-undef"],
      },
      "ok.js": {},
    });
  });
});
