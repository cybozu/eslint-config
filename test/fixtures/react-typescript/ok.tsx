import * as React from 'react';

interface Props {
  name: string;
}

const Foo: React.FC<Props> = ({name}) => <p>Foo{name}</p>;

const Component = () => <Foo name="bar" />;
export default Component;