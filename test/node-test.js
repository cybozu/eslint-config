const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("node", () => {
  it("should get expected errors and warninigs with node config", async () => {
    const result = await runLintWithFixtures("node");
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["n/no-missing-require", "n/no-exports-assign"],
      },
      "ok.js": {},
    });
  });
});
