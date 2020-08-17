# TypeScript

typescript 是**微软**开发的一种基于 javascript 的拓展语言。ts 主要的作用是对 js 进行类型检查。这样能在代码运行之前就避免一些错误，这在开发复杂应用时是很有用的，并且编辑器（类如 vscode）会根据类型定义提供一些代码提示，提高开发效率

## 基础类型

在变量后面添加`:类型`表示这个变量是什么类型。

- `boolean`: 布尔值
- `number`: 数字
- `string`: 字符串
- `any`: 所有类型
- `void`: 没有类型
- `类型[]`: 数组，或者`Array<类型>`这样表示
- `null和undefined`: null 和 undefined，很少用到
- `never`: never 类型表示的是那些永不存在的值的类型
- `object`: object 类型

```ts
let flag: boolean = false;
let num: number = 16;
let str: string = "hello ts";
```

如果赋值了错误的类型，是会报错的

```ts
str = 8;
// Error: 不能将类型“8”分配给类型“string”。ts(2322)
```

数组

```ts
let arr: number[] = [1, 2, 3];
// or
let arr: Array<number> = [1, 2, 3];
```

## 高级类型

通过基础类型组合而来的, 我们可以叫他高级类型

### 接口

```ts
interface Article {
  title: string;
  count: number;
  content: string;
  // ?:非必填字段
  fromSite?: string;
  //   函数
  sleep: (time: number) => void;
}

const article: Article = {
  title: "为vue3学点typescript(2), 类型",
  count: 9999,
  content: "xxx...",
  fromSite: "baidu.com",
};
```

在这种情况下,当我们给 `article` 赋值的时候, 如果**任何一个字段没有被赋值**或者**字段对应的数据类型不对**, ts 都会提示错误, 这样就保证了我们写代码不会出现上述的小错误.

### 交叉类型(&)

交叉类型是将多个类型合并为一个类型, 表示"**并且**"的关系,用`&`连接多个类型, 常用于对象合并

```ts
interface A {
  a: number;
}
interface B {
  b: string;
}

const ab: A & B = { a: 1, b: "ok" };
```

### 联合类型(|)

联合类型也是将多个类型合并为一个类型, 表示"**或**"的关系,用`|`连接多个类型

```ts
interface Animal {
  type: string;
}
let i: number | string | Animal = "ok";
let r: (number | string)[] = [1, "ok"];
```

## 泛型

一种或多种类型变量，在之后可以引用这个类型

```ts
// 在函数名后面用"<>"声明一个类型变量
function convert<T>(input: T): T {
  return input;
}

convert<number>(1);
// 表示参数input是number类型，函数返回值也是number类型
conver(2);
// 也可以不传<number> ts看到你传入的是2 自动推断出T是number类型
```

### 索引类型(keyof)

获取 type 中所有键名

## 文档

- [ts 的优势](https://www.jianshu.com/p/d2d15111f9d4)
- [ts 官方文档](https://www.tslang.cn/docs/handbook/basic-types.html)
- [ts 入门](https://juejin.im/post/6844904008583233544)
