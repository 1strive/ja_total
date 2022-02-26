/*
 * @Author: ja
 * @Date: 2021-12-22 20:32:39
 * @LastEditors: ja
 * @LastEditTime: 2021-12-22 20:33:40
 */
// ：call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
