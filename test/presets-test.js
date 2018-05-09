const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("presets", () => {
  describe("index", () => {
    it("should be able to use index as well as lib/base", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("base"),
        runLintWithFixtures("base", "index.js")
      );
    });
  });
  describe("react", () => {
    it("should be able to use react as well as lib/base and lib/react", () => {
      assert.deepStrictEqual(runLintWithFixtures("react", "presets/react.js"), {
        "ok.jsx": {}
      });
      assert.deepStrictEqual(
        runLintWithFixtures("base"),
        runLintWithFixtures("base", "presets/react.js")
      );
    });
  });
  describe("flowtype", () => {
    it("should be able to use flowtype as well as lib/base and lib/flowtype", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("flowtype"),
        runLintWithFixtures("flowtype", "presets/flowtype.js")
      );
      assert.deepStrictEqual(
        runLintWithFixtures("base"),
        runLintWithFixtures("base", "presets/flowtype.js")
      );
    });
  });
  describe("react-flowtype", () => {
    it("should be able to use react-flowtype as well as lib/react and lib/flowtype", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("react", "presets/react.js"),
        runLintWithFixtures("react", "presets/react-flowtype.js")
      );
      assert.deepStrictEqual(
        runLintWithFixtures("flowtype"),
        runLintWithFixtures("flowtype", "presets/react-flowtype.js")
      );
    });
  });
  describe("prettier", () => {
    it("should be able to use prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/prettier.js")
      );
    });
  });
  describe("react-prettier", () => {
    it("should be able to use react-prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/react-prettier.js")
      );
    });
  });
  describe("react-flowtype-prettier", () => {
    it("should be able to use react-flowtype-prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/react-flowtype-prettier.js")
      );
    });
  });
});
