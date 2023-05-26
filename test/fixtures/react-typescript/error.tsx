import React from 'react';

interface Props {
  name: Array<string>;
}

const Foo = ({name}: Props) => <p>Foo{...name}</p>;

const Component = () => <Foo name={['bar', 'foo']} />;
export default Component;

const shadow: number = 1;
const shadowingFunc: () => number = () => {
  const shadow: number = 2;
  return shadow;
};