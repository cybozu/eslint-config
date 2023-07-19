const assert = require("assert");
const runLintWithFixtures = require("./lib/runLintWithFixtures");

describe("presets", () => {
  describe("index", () => {
    it("should be able to use index as well as lib/base", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("base"),
        await runLintWithFixtures("base", "index.js"),
      );
    });
  });
  describe("react", () => {
    it("should be able to use react as well as lib/base and lib/react", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("react", "presets/react.js"),
        {
          "ok.jsx": {},
          "warning.jsx": {
            warnings: ["react/jsx-no-useless-fragment", "react/jsx-indent"],
          },
        },
      );
      assert.deepStrictEqual(
        await runLintWithFixtures("base"),
        await runLintWithFixtures("base", "presets/react.js"),
      );
    });
  });
  describe("node", () => {
    it("should be able to use node as well as lib/node", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("node"),
        await runLintWithFixtures("node", "presets/node.js"),
      );
    });
  });
  describe("kintone-customize-es5", () => {
    it("should be able to use kintone-customize-es5 as well as lib/es5 and lib/kintone", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("es5"),
        await runLintWithFixtures("es5", "presets/kintone-customize-es5.js"),
      );
    });
    it("should be able to use kintone-customize-es5 as well as lib/kintone", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures(
          "kintone",
          "presets/kintone-customize-es5.js",
        ),
        {
          "ok.js": {},
          "error.js": { errors: ["strict", "strict"] },
        },
      );
    });
  });
  describe("prettier", () => {
    it("should be able to use prettier as well as lib/prettier", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("prettier"),
        await runLintWithFixtures("prettier", "presets/prettier.js"),
      );
    });
  });
  describe("react-prettier", () => {
    it("should be able to use react-prettier as well as lib/prettier", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("prettier"),
        await runLintWithFixtures("prettier", "presets/react-prettier.js"),
      );
    });
  });
  describe("node-prettier", () => {
    it("should be able to use node-prettier as well as lib/prettier", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("prettier"),
        await runLintWithFixtures("prettier", "presets/node-prettier.js"),
      );
    });
  });
  describe("node-typescript-prettier", () => {
    it("should be able to use node-typescript-prettier as well as lib/prettier", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("prettier"),
        await runLintWithFixtures(
          "prettier",
          "presets/node-typescript-prettier.js",
        ),
      );
    });
  });
  describe("react-typescript-prettier", () => {
    it("should be able to use react-typescript-prettier as well as lib/prettier", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("prettier"),
        await runLintWithFixtures(
          "prettier",
          "presets/react-typescript-prettier.js",
        ),
      );
    });
  });
  describe("react-typescript", () => {
    it("should be able to use react-typescript as well as presets/typescript", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("typescript", "presets/typescript.js"),
        await runLintWithFixtures("typescript", "presets/react-typescript.js"),
      );
    });
  });
  describe("typescript-prettier", () => {
    it("should be able to use typescript-prettier as well as lib/prettier", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("prettier"),
        await runLintWithFixtures("prettier", "presets/typescript-prettier.js"),
      );
    });
  });
  describe("typescript", () => {
    it("should be able to use typescript as well as lib/typescript", async () => {
      assert.deepStrictEqual(
        await runLintWithFixtures("typescript"),
        await runLintWithFixtures("typescript", "presets/typescript.js"),
      );
    });
  });
});
