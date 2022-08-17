/*
 * @Author: JA
 * @Date: 2022-08-14 18:05:50
 * @LastEditTime: 2022-08-14 18:11:53
 * @LastEditors: JA
 */

// 问题可以转换成，对 ss 的每个下标 ii，求

// s[i]s[i] 到其左侧最近的字符 cc 的距离
// s[i]s[i] 到其右侧最近的字符 cc 的距离
// 这两者的最小值。
const s = 'abaac'
const c = 'a'
var shortestToChar = function (s, c) {
    const n = s.length;
    const ans = new Array(n).fill(0);

    for (let i = 0, idx = -n; i < n; ++i) {
        if (s[i] === c) {
            idx = i;
        }
        ans[i] = i - idx;
    }

    for (let i = n - 1, idx = 2 * n; i >= 0; --i) {
        if (s[i] == c) {
            idx = i;
        }
        ans[i] = Math.min(ans[i], idx - i);
    }
    return ans;
};
const ans = shortestToChar(s, c)
console.log(ans, 'ans');