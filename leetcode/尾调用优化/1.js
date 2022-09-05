/*
 * @Author: JA
 * @Date: 2022-08-09 00:50:20
 * @LastEditTime: 2022-08-09 00:59:05
 * @LastEditors: JA
 */

//斐波那契数列
function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

// const ans = fib(1000)
// console.log(ans);

//优化

// 外出框架函数
function betterFib(n) {
    return fiber(0, 1, n)
}

// 内层递归函数（注意满足尾递归条件）
function fiber(a, b, n) {
    if (n === 0) {
        return a
    }
    return fiber(b, a + b, n - 1)
}

const ans = betterFib(333)
console.log(ans);
