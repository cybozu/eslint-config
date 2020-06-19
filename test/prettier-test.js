const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("prettier", () => {
  it("should get expected errors and warninigs", async () => {
    const result = await runLintWithFixtures("prettier", "presets/prettier.js");
    assert.deepStrictEqual(result, {
      "ok.js": {},
      "error.js": {
        errors: ["prettier/prettier"]
      }
    });
  });
});
