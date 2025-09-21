// 简单的常量导出
export const VERSION = '1.0.0';
export const PI = 3.14159;

// 简单的类型导出
export type UserInfo = {
  name: string;
  age: number;
};

// 简单的函数导出
/**
 * 计算两个数的和
 * @param a 第一个数
 * @param b 第二个数
 * @returns 两数之和
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 判断一个数是否为偶数
 * @param num 要判断的数
 * @returns 如果是偶数返回true，否则返回false
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * 将字符串转换为大写
 * @param str 输入字符串
 * @returns 转换后的大写字符串
 */
export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

// 默认导出一个包含所有功能的对象
const utils = {
  VERSION,
  PI,
  add,
  isEven,
  toUpperCase
};

export default utils;
