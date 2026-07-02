import { RuleTester } from "eslint";
import rule from "../../../../plugins/react/rules/jsx-key.js";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("jsx-key", rule, {
  valid: [
    { code: `const a = [<div key="1" />, <div key="2" />];` },
    { code: `items.map(x => <div key={x.id}>{x.name}</div>);` },
    { code: `items.map(x => { return <div key={x} />; });` },
    { code: `items.flatMap(x => <div key={x} />);` },
    { code: `Array.from(items, x => <div key={x} />);` },
    { code: `Array.from(items, x => { return <div key={x} />; });` },
    { code: `items.map(x => (x.a ? <div key={x} /> : <span key={x} />));` },
    { code: `items.map(x => x.a && <div key={x} />);` },
    // Return values of these methods are not rendered as element arrays
    { code: `items.filter(x => <div />);` },
    { code: `items.some(x => <div />);` },
    { code: `items.reduce((acc, x) => <Wrap>{acc}</Wrap>, init);` },
    { code: `const el = <div />;` },
    { code: `const el = <><span /><span /></>;` },
  ],
  invalid: [
    {
      code: `const a = [<div />];`,
      errors: [{ messageId: "missingKey" }],
    },
    {
      code: `const a = [<div />, <span />];`,
      errors: [{ messageId: "missingKey" }, { messageId: "missingKey" }],
    },
    {
      code: `items.map(x => <div>{x}</div>);`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.map(x => { return <div />; });`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.map(function(x) { return <div />; });`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.flatMap(x => <div>{x}</div>);`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `Array.from(items, x => <div />);`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `Array.from(items, x => { return <div />; });`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.map(x => (x.a ? <div /> : <span />));`,
      errors: [
        { messageId: "missingIteratorKey" },
        { messageId: "missingIteratorKey" },
      ],
    },
    {
      code: `items.map(x => x.a && <div />);`,
      errors: [{ messageId: "missingIteratorKey" }],
    },
    {
      code: `items.map(x => { return x.a ? <div /> : <span />; });`,
      errors: [
        { messageId: "missingIteratorKey" },
        { messageId: "missingIteratorKey" },
      ],
    },
    {
      code: `const a = [<>text</>];`,
      errors: [{ messageId: "missingKey" }],
    },
  ],
});
