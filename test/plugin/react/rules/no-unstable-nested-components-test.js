import { RuleTester } from "eslint";
import rule from "../../../../plugin/react/rules/no-unstable-nested-components.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-unstable-nested-components", rule, {
  valid: [
    { code: `function App() { return <div />; }` },
    { code: `const App = () => <div />;` },
    // Components defined outside render
    {
      code: `function Child() { return <p/>; } function Parent() { return <Child/>; }`,
    },
    // allowAsProps: component defined as JSX prop value
    {
      code: `function Parent() { return <Foo render={function Child() { return <span />; }} />; }`,
      options: [{ allowAsProps: true }],
    },
  ],
  invalid: [
    {
      code: `function Parent() { function Child() { return <p/>; } return <Child/>; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    {
      code: `function Parent() { const Child = () => <p/>; return <Child/>; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    {
      code: `function Parent() { return <Foo render={function Child() { return <span />; }} />; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
  ],
});
