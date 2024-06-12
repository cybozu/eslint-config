const assert = require("assert");
const node = require("../../flat/presets/node");
const runLintWithFixturesFlat = require("../lib/runLintWithFixturesFlat");

describe("flat node", () => {
  it("should get expected errors and warnings with node config", async () => {
    const result = await runLintWithFixturesFlat("node", node);
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["n/no-missing-require", "n/no-exports-assign"],
      },
      "ok.js": {},
    });
  });
});
