const e = require("express");

/*
 * @Author: JA
 * @Date: 2022-09-18 15:34:40
 * @LastEditTime: 2022-09-18 16:39:06
 * @LastEditors: JA
 */
const arr = [[12, 2], 45, [2, 3, 4, 4], [12, [23, 34]]]
// const arr1 = [[12, 2], 45]

// 可以指定维数
Array.prototype._flat = function (m = 1) {
    let ans = this
    while (m > 0) {
        const isFlat = this.some((i) => {
            return Array.isArray(i)
        })
        if (isFlat) {
            ans = [].concat(...ans)
        } else {
            return ans
        }
        m--
    }
    return ans
}

function _flat(arr) {
    let ans = []
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            ans = ans.concat(..._flat(ele))
        } else {
            ans.push(ele)
        }
    }
    return ans
}
console.log(flatten3(arr));

function flatten1(arr) {
    return arr.toString().split(',').map((i) => {
        // return +i  //两种都可以实现String变Number
        return parseInt(i)
    })
}


function flatten3(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten3(next) : next)
    }, [])//reducer后的参数作为初始值（此处为[]）
}