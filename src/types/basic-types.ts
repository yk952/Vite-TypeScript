// src/types/basic-types.ts

// 1. 基础类型
const username: string = "Alice";
const age: number = 25;
const isStudent: boolean = false;
const emptyValue: null = null;
const undefinedValue: undefined = undefined;

// 2. 数组类型
const scores: number[] = [90, 85, 95]; // 方式1
const hobbies: Array<string> = ["reading", "coding"]; // 方式2

// 3. 联合类型（多种可能的类型）
const id: string | number = "1001"; // 可以是string或number

// 4. 函数类型
function add(a: number, b: number): number {
  return a + b;
}

export { username, age, add }; // 导出供其他文件使用