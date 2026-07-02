import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/no-unstable-nested-components.js";

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
    {
      code: `const Child = React.memo(() => <p/>); function Parent() { return <Child/>; }`,
    },
    // Render props are stable by contract
    {
      code: `function Parent() { return <Table renderRow={function Row(r) { return <tr/>; }} />; }`,
    },
    {
      code: `function Parent() { return <Table renderRow={(r) => <tr/>} />; }`,
    },
    // Function as children
    {
      code: `function Parent() { return <Ctx.Consumer>{(v) => <div>{v}</div>}</Ctx.Consumer>; }`,
    },
    // allowAsProps: component defined as JSX prop value
    {
      code: `function Parent() { return <Foo footer={function Child() { return <span />; }} />; }`,
      options: [{ allowAsProps: true }],
    },
    // Iterator callbacks are not nested component definitions
    {
      code: `function Parent() { return <table>{rows.map(function Row(r) { return <tr/>; })}</table>; }`,
    },
    // Lowercase helpers are not components
    {
      code: `function Parent() { const renderRow = () => <tr/>; return <table>{renderRow()}</table>; }`,
    },
    // Functions that merely contain JSX (not returning it) are not components
    {
      code: `function Parent() { return <button onClick={() => open(<Modal/>)} />; }`,
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
    // Wrapper calls do not make nested components stable
    {
      code: `function Parent() { const Child = memo(() => <p/>); return <Child/>; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    {
      code: `function Parent() { const Child = React.useCallback(() => <p/>, []); return <Child/>; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    {
      code: `function Parent() { const Child = memo(forwardRef((p, ref) => <p ref={ref}/>)); return <Child/>; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    // Components declared inside custom hooks
    {
      code: `function useThing() { const Child = () => <p/>; return Child; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    // Functions returning JSX passed as non-render props
    {
      code: `function Parent() { return <Foo footer={() => <div />} />; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
    {
      code: `function Parent() { return <Foo footer={function Child() { return <span />; }} />; }`,
      errors: [{ messageId: "noNestedComponent" }],
    },
  ],
});
