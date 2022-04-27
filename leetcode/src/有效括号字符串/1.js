/*
 * @Author: ja
 * @Date: 2022-04-01 17:31:00
 * @LastEditors: ja
 * @LastEditTime: 2022-04-01 17:58:22
 */
function checkValidString(s) {
    let minCount = 0, maxCount = 0
    const n = s.length
    for (let i = 0; i < n; i++) {
        const c = s[i]
        if (c === '(') {
            minCount++
            maxCount++
        } else if (c === ')') {
            minCount = Math.max(minCount - 1, 0)
            maxCount--
            if (maxCount < 0) {
                return false
            }
        } else {
            minCount = Math.max(minCount - 1, 0)
            maxCount++
        }
    }
    return minCount === 0
}