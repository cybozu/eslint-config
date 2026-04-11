const nums: Array<number> = [1, 2, 3];
String(nums);

const shadow: number = 1;
String(shadow);
const shadowingFunc: () => number = () => {
  const shadow: number = 2;
  return shadow;
};
shadowingFunc();