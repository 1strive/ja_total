/*
 * @Author: JA
 * @Date: 2022-09-17 02:09:48
 * @LastEditTime: 2022-09-17 02:12:06
 * @LastEditors: JA
 */
Array.prototype._filter = function (fn) {
    let ans = []
    for (let i = 0; i < this.length; i++) {
        fn(this[i], i, this) && ans.push(this[i])
    }
    return ans
}

