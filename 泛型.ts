function identify<T>(arg: T): T {
  return arg;
}

let ret = identify(false);

declare function general(): void;

interface Person {
  name: string;
  age: number;
  eat: () => void;
}

type A = keyof Person;

let pp = {
  a: {
    b() {
      console.log(1);
    },
  },
};
pp?.a?.b()