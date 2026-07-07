import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-no-undef.js";

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
    // Member expression roots resolve to a defined variable
    {
      code: `const foo = { bar: () => null }; const el = <foo.bar />;`,
    },
    {
      code: `import Foo from './Foo'; const el = <Foo.Bar />;`,
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
    // Variables that only exist as config-provided globals (no actual
    // definition in code) don't count as declared
    {
      code: `const el = <SomeGlobal />;`,
      languageOptions: { globals: { SomeGlobal: "readonly" } },
      errors: [{ messageId: "undefined", data: { name: "SomeGlobal" } }],
    },
    // Undefined member expression roots are reported regardless of case
    {
      code: `const el = <foo.bar />;`,
      errors: [{ messageId: "undefined", data: { name: "foo" } }],
    },
  ],
});
