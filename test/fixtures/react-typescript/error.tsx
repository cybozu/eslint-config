import React from 'react';

interface Props {
  name: Array<string>;
}

const Foo = ({name}: Props) => <p>Foo{...name}</p>;

const Component = () => <Foo name={['bar', 'foo']} />;
export default Component;