const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("node-typescript", () => {
  it("should get expected errors and warninigs", () => {
    // We use react presets in order to support ES2017 syntax
    const result = runLintWithFixtures(
      "node-typescript",
      "presets/node-typescript-prettier.js"
    );
    assert.deepStrictEqual(result, {
      "ok.ts": {},
      "sum.ts": {},
      "error.ts": {
        errors: ["node/no-missing-import"]
      }
    });
  });
});
