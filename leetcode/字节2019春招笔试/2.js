/*
 * @Author: JA
 * @Date: 2022-03-12 17:18:12
 * @LastEditTime: 2022-03-12 17:36:32
 * @LastEditors: JA
 */


//乘积为正子序列
const arr = [1,1,1,-1,-1,-1]
function meiT(arr) {
    let max = 0
    let min = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) max++
        if (arr[i] == -1) min++
    }

    let minAns = parseInt(min / 2) + 1
    let ans = 0
    ans = (max + 1) * minAns
    return ans
}

const ans = meiT(arr)
console.log(ans);