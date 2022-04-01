/*
 * @Author: ja
 * @Date: 2022-03-31 10:56:23
 * @LastEditors: ja
 * @LastEditTime: 2022-03-31 11:32:27
 */
function check(s) {
    let left = 0
    let cur = 0
    let resLeft = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            right++
            for (let j = resLeft; j < i; j++) {
                if (s[j] === '(' || s[j] === '*') {
                    cur++
                }
            }
            resLeft = i
            if (cur > left) {
                left++
            } else {
                return false
            }
        }
    }
    if (right === 0) return false
    return true
}

let s = '()'
const ans = check(s)
console.log(ans);