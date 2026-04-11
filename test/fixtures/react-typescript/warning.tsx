import React from 'react';

class Base {
  format(s: string): string {
    return s;
  }
}

class Formatter extends Base {
  constructor() {
    super();
  }
}

interface Props {
  name: string | null;
}

const Component: React.FC<Props> = (props) => {
  const text = new Formatter().format(props.name!);
  return <p>{text}</p>;
};

export default Component;
