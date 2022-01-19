const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("react", () => {
  it("should get expected errors and warninigs", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixtures("react", "presets/react.js");
    assert.deepStrictEqual(result, {
      "ok.jsx": {},
      "warning.jsx": {
        warnings: ["react/jsx-no-useless-fragment", "react/jsx-indent"],
      },
    });
  });
});
