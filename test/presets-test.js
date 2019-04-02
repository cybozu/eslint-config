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
  describe("node", () => {
    it("should be able to use node as well as lib/node", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("node"),
        runLintWithFixtures("node", "presets/node.js")
      );
    });
  });
  describe("kintone-customize-es5", () => {
    it("should be able to use kintone-customize-es5 as well as lib/es5 and lib/kintone", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("es5"),
        runLintWithFixtures("es5", "presets/kintone-customize-es5.js")
      );
    });
    it("should be able to use kintone-customize-es5 as well as lib/kintone", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("kintone", "presets/kintone-customize-es5.js"),
        {
          "ok.js": {},
          "error.js": { errors: ["strict", "strict"] }
        }
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
  describe("node-prettier", () => {
    it("should be able to use node-prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/node-prettier.js")
      );
    });
  });
  describe("node-typescript-prettier", () => {
    it("should be able to use node-typescript-prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/node-typescript-prettier.js")
      );
    });
  });
  describe("react-typescript-prettier", () => {
    it("should be able to use react-typescript-prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/react-typescript-prettier.js")
      );
    });
  });
  describe("react-typescript", () => {
    it("should be able to use react-typescript as well as presets/typescript", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("typescript", "presets/typescript.js"),
        runLintWithFixtures("typescript", "presets/react-typescript.js")
      );
    });
  });
  describe("typescript-prettier", () => {
    it("should be able to use typescript-prettier as well as lib/prettier", () => {
      assert.deepStrictEqual(
        runLintWithFixtures("prettier"),
        runLintWithFixtures("prettier", "presets/typescript-prettier.js")
      );
    });
  });
});
