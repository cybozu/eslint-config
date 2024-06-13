const assert = require("assert");
const es5 = require("../../flat/lib/es5");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat es5", () => {
  it("should get expected errors and warnings with es5 config", async () => {
    const result = await runLintWithFixturesFlat("es5", es5());
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-implicit-globals"],
      },
      "warning.js": {
        warnings: ["array-callback-return"],
      },
      "ok.js": {},
    });
  });
});
