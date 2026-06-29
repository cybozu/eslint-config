import assert from "assert";
import { Linter } from "eslint";
import reactPlugin from "../../../../plugin/react/index.js";

const config = [
  {
    files: ["**/*.jsx"],
    plugins: { react: reactPlugin },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-unused-vars": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];

describe("react/jsx-uses-vars", () => {
  let linter;
  beforeEach(() => {
    linter = new Linter();
  });

  it("should not flag JSX component usage as unused variable", () => {
    const code = `const Foo = () => null; export default () => <Foo />;`;
    const messages = linter.verify(code, config, { filename: "test.jsx" });
    const errors = messages.filter((m) => m.ruleId === "no-unused-vars");
    assert.strictEqual(errors.length, 0);
  });

  it("should not flag member expression JSX component as unused", () => {
    const code = `const Foo = { Bar: () => null }; export default () => <Foo.Bar />;`;
    const messages = linter.verify(code, config, { filename: "test.jsx" });
    const errors = messages.filter((m) => m.ruleId === "no-unused-vars");
    assert.strictEqual(errors.length, 0);
  });

  it("should still catch genuinely unused variables", () => {
    const code = `const unused = 42; export default () => <div />;`;
    const messages = linter.verify(code, config, { filename: "test.jsx" });
    const errors = messages.filter((m) => m.ruleId === "no-unused-vars");
    assert.ok(errors.length > 0);
  });
});
