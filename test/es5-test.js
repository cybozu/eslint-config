const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("es5", () => {
  it("should get expected errors and warninigs with es5 config", async () => {
    const result = await runLintWithFixtures("es5");
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-redeclare", "no-unused-vars"]
      },
      "warning.js": {
        warnings: ["array-callback-return"]
      },
      "ok.js": {}
    });
  });
});
