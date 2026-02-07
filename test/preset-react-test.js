import assert from "assert";
import react from "../presets/react.js";
import { runLintWithFixtures } from "./lib/runLintWithFixtures.js";

describe("flat preset react", () => {
  it("should get expected errors and warnings", async () => {
    // We use react presets in order to support ES2017 syntax
    const result = await runLintWithFixtures("react", react);

    assert.deepStrictEqual(result, {
      "ok.jsx": {},
      "warning.jsx": {
        warnings: ["react/jsx-no-useless-fragment", "react/jsx-indent"],
      },
    });
  });
});
