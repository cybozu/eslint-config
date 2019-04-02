const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("react-typescript", () => {
  xit("should get expected errors and warninigs", () => {
    // We use react presets in order to support ES2017 syntax
    const result = runLintWithFixtures(
      "react-typescript",
      "presets/react-typescript.js"
    );
    assert.deepStrictEqual(result, {
      "ok.tsx": {},
      "error.tsx": {},
      "warning.tsx": {}
    });
  });
});
