import React from 'react';

interface Props {
  name: string;
}

class Foo extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // noop
  }

  concat(a: string, b: string): string {
    return a + b!;
  }

  render() {
    return <p>Foo{name}</p>;
  }
}

const Component = () => <Foo name="bar" />;
export default Component;
