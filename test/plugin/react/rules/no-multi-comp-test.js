import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/no-multi-comp.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-multi-comp", rule, {
  valid: [
    { code: `function App() { return <div />; }` },
    { code: `const App = () => <div />;` },
    // Helper functions that don't return JSX are ignored
    { code: `function helper() { return 42; } function App() { return <div />; }` },
    // ignoreStateless: arrow function components are ignored
    {
      code: `const A = () => <div />; const B = () => <span />;`,
      options: [{ ignoreStateless: true }],
    },
  ],
  invalid: [
    {
      code: `function A() { return <div />; } function B() { return <span />; }`,
      errors: [{ messageId: "onlyOneComponent" }],
    },
    {
      code: `const A = () => <div />; function B() { return <span />; }`,
      errors: [{ messageId: "onlyOneComponent" }],
    },
    {
      code: `const A = () => <div />; const B = () => <span />;`,
      errors: [{ messageId: "onlyOneComponent" }],
    },
  ],
});
