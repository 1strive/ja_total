/*
 * @Author: JA
 * @Date: 2022-09-17 02:14:31
 * @LastEditTime: 2022-09-17 02:22:05
 * @LastEditors: JA
 */
Array.prototype._reduce = function (fn, init) {
    if (init) {
        for (let i = 0; i < this.length; i++) {
            init = fn(init, this[i], i)
        }
        return init
    } else {
        init = this[0]
        for (let i = 1; i < this.length; i++) {
            init = fn(init, this[i], i)
        }
        return init
    }
}

const arr = [1, 2, 3]
const ans = arr._reduce((a, b, c) => {
    console.log(a, b, c);
    return a + b
})

console.log(ans);