type Foo = {
  bar: string;
};

const sum = (a: number, b: number): number => a + b;
sum(10, 20);

interface BarInterface {
  name: string;
  getName: () => string;
}

class Bar {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

const bar: BarInterface = new Bar('bar');
bar.getName();
