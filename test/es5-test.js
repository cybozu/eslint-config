import assert from "assert";
import { es5 } from "../lib/es5.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat es5", () => {
  it("should get expected errors and warnings with es5 config", async () => {
    const result = await runLintWithFixtures("es5", es5());
    assert.deepStrictEqual(result, {
      "error.js": {
        errors: ["no-implicit-globals"],
      },
      "warning.js": {
        warnings: ["array-callback-return"],
      },
      "ok.js": {},
    });
  });
});
