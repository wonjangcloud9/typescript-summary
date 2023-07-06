let hello: string = "hello ";
console.log(hello);

// 타입 종류

// 문자
let str: string;
let red: string = "Red";
let green: string = "Green";
let myColor: string = `My color is ${red}`;
let yourColor: string = "Your color is" + green;

// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let infinity: number = Infinity;
let nan: number = NaN;

// 불리언
let bool: boolean;
let trueValue: boolean = true;
let falseValue: boolean = false;

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log(undefinedValue);
console.log(nullValue);

// 배열
let arr1: string[] = ["a", "b", "c"];
let arr2: Array<string> = ["a", "b", "c"];
let arr3: number[] = [1, 2, 3];
let arr4: Array<number> = [1, 2, 3];
let arr5: Array<number | string> = [1, 2, 3, "a"];
let arr6: (number | string)[] = [1, 2, 3, "a"];

// 객체
let obj: object = {};
let person1: object = {
  name: "Lee",
  age: 20,
};
console.log(person1);

let person2: { name: string; age: number } = {
  name: "Lee",
  age: 20,
};
console.log(person2);

interface User {
  name: string;
  age: number;
}

let person3: User = {
  name: "Lee",
  age: 20,
};

// 함수
function add(x: number, y: number): number {
  return x + y;
}
console.log(add(1, 2)); // 3

const sub = (x: number, y: number): number => x + y;
console.log(sub(1, 2)); // 3
