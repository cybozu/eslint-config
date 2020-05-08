const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("react", () => {
  it("should get expected errors and warninigs", () => {
    // We use react presets in order to support ES2017 syntax
    const result = runLintWithFixtures("react", "presets/react.js");
    assert.deepStrictEqual(result, {
      "ok.jsx": {},
    });
  });
});
