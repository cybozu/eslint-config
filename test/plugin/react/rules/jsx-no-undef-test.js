import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/jsx-no-undef.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-no-undef", rule, {
  valid: [
    { code: `const Foo = () => null; const el = <Foo />;` },
    { code: `const el = <div />;` },
    { code: `const el = <span className="x" />;` },
    {
      code: `import Foo from './Foo'; const el = <Foo />;`,
    },
    {
      code: `function App() { const Foo = () => null; return <Foo />; }`,
    },
  ],
  invalid: [
    {
      code: `const el = <Foo />;`,
      errors: [{ messageId: "undefined", data: { name: "Foo" } }],
    },
    {
      code: `const el = <MyComp />;`,
      errors: [{ messageId: "undefined", data: { name: "MyComp" } }],
    },
  ],
});
