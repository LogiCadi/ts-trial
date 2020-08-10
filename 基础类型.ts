let isDone: boolean = false;
let age: number = 12;
let str: string = "jerry";
let n: Number = new Number(12);
str = 8;

// 数组
// let arr: number[] = [1, 2, 3];
// let arr: Array<number | boolean> = [23, false, 12];
let arr: (number | boolean)[] = [23, false, 12];

// 元组
let x: [string, number, number] = ["he", 2, 2];

x[2].toFixed(2);

// 枚举
enum Color {
  Red = 1,
  Green,
  Blue,
}
// let c: Color = Color.Blue;
// console.log(c);
let i: string = Color[1];
console.log(i);

// Any
let p: any = 4;
p.toFixed();

// void
function warnUser(): void {
  console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// Null 和 Undefined
// Never
// 返回never的函数必须存在无法达到的终点!!
function infiniteLoop(): never {
  while (true) {}
}

// object
let o: object = { a: 1 };

// 类型断言
let someValue: any = 1;
// 告诉编译器，我确定这个是string类型，你别校验了
// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length;
// 两种形式是等价的。
// 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
