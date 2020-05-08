const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("node", () => {
  it("should get expected errors and warninigs with node config", () => {
    const result = runLintWithFixtures("node");
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: [
          "node/no-missing-require",
          "node/no-unsupported-features/es-syntax",
        ],
      },
      "ok.js": {},
    });
  });
});
