/*
 * @Author: JA
 * @Date: 2022-03-27 23:59:37
 * @LastEditTime: 2022-03-28 00:29:53
 * @LastEditors: JA
 */
// 由于 xx 平方根的整数部分 \textit{ans}ans 是满足 k^2 \leq xk 
//  ≤x 的最大 kk 值，因此我们可以对 kk 进行二分查找，从而得到答案。
function mySqrt(x) {
    let l = 0, r = x, ans = -1
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)
        if (mid * mid <= x) {
            ans = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return ans
}
