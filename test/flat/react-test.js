const assert = require("assert");
const react = require("../../flat/presets/react");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat react", () => {
  it("should get expected errors and warnings", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixturesFlat("react", react);

    assert.deepStrictEqual(result, {
      "ok.jsx": {},
      "warning.jsx": {
        warnings: ["react/jsx-no-useless-fragment", "react/jsx-indent"],
      },
    });
  });
});
