/*
 * @Author: ja
 * @Date: 2021-12-27 18:53:57
 * @LastEditors: ja
 * @LastEditTime: 2021-12-27 19:24:18
 */


//一、重写toString()???

function add(a) {
    function sum(b) { // 使用闭包
        sum = a == b ? a + b : a; // 累加
        return sum;
    }
    sum.toString = function () { // 只在最后一次调用
        return a;
    }
    return sum; // 返回一个函数
}


var ans = add(1)
console.log(ans);







//二、柯里化