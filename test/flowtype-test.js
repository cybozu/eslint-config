const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("flowtype", () => {
  it("should get expected errors and warninigs with react config with flowtype config", () => {
    // We use react presets in order to support ES2017 syntax
    const result = runLintWithFixtures("flowtype");
    assert.deepStrictEqual(result, {
      "ok.js": {},
      "error.js": {
        errors: ["flowtype/type-id-match"]
      },
      "warning.js": {
        warnings: ["flowtype/semi"]
      }
    });
  });
});
