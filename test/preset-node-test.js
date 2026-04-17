import assert from "assert";
import node from "../presets/node.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("node", () => {
  it("should get expected errors and warnings with node config", async () => {
    const result = await runLintWithFixtures("node", node);
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["n/no-missing-import", "n/no-deprecated-api"],
      },
      "ok.js": {},
    });
  });
});
