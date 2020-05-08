const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("es5", () => {
  it("should get expected errors and warninigs with es5 config", () => {
    const result = runLintWithFixtures("es5");
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-unused-vars", "no-redeclare"],
      },
      "warning.js": {
        warnings: ["array-callback-return"],
      },
      "ok.js": {},
    });
  });
});
