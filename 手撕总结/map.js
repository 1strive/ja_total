/*
 * @Author: JA
 * @Date: 2022-09-17 00:49:06
 * @LastEditTime: 2022-09-17 02:09:18
 * @LastEditors: JA
 */
Array.prototype._map = function (fn) {
    let ans = []
    for (let i = 0; i < this.length; i++) {
        ans.push(fn(this[i], i, this))
    }
    return ans
}



const arr = [1, 2]
const ans = arr._map((i, idx, arr) => {
    console.log(idx, arr)
    return i * 2
})
console.log(ans);