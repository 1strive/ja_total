/*
 * @Author: JA
 * @Date: 2022-09-14 19:13:39
 * @LastEditTime: 2022-09-14 19:18:23
 * @LastEditors: JA
 */

// 元组初始化赋值时，值的类型和数量必须与声明的时候一一对应
// 元组允许手动给跨界的元素复制，此时值类型为元组声明时类型的联合类型
let arr: [number, number, string] = [1, 2, 'ooo']
// arr.push(true) 报错
arr.push(3)
console.log(arr);
