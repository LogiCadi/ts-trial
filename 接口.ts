// 在java中，接口是一种特殊的抽象类
// 它里面只有定义，没有具体的实现
// ts中，用于定义一些结构化的事物

interface LabelledValue {
    label: string
    // 可选属性:有些是只在某些条件下存在，或者根本不存在
    size?: number
    // 只读属性
    readonly re: string
    // 额外的属性检查
    [key: string]: any
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.siz);

    labelledObj.re = 'hello'

    console.log(labelledObj.a)
}

let myObj = { size: 10, label: "Size 10 Object", re: "ha", a: 1 };
printLabel(myObj);

// ReadonlyArray只读数组
let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
let ro: readonly any[] = a;
// let ro: readonly Array<number> = a;// incorrect

ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 类类型
interface Animal {
    name: string
    age: number
    /**吃 */
    eat?: () => string
    // 须实现run方法
    run: () => void
}
// 类实现接口
class Person implements Animal, Last {
    name: 'jerry'
    age: 20
    eat() {
        console.log('eat')
        return 'a'
    }
}

// 继承接口
interface Last {
    arg: string
}
// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface Dog extends Animal, Last {
    wang: () => void
}

let huang = {} as Dog
huang.eat()
huang.wang()
huang.arg = 'heheehe'

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;