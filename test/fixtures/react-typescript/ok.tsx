import React from 'react';

interface Props {
  name: string;
}

const Foo = ({name}: Props) => <p>Foo{name}</p>;

const Component = () => <Foo name="bar" />;
export default Component;