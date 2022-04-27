/*
 * @Author: JA
 * @Date: 2022-03-27 22:57:57
 * @LastEditTime: 2022-03-27 23:03:34
 * @LastEditors: JA
 */

// 柯里化的意思是将一个多元函数，转换成一个依次调用的单元函数。
// f(a,b,c) → f(a)(b)(c)

const add = function(x){
    return function(y){
        return x + y
    }
}

const addTwo = add(1)

const ans = addTwo(10)
console.log(ans);