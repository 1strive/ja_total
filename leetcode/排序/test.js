/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-09-09 17:21:04
 * @LastEditors: JA
 */

const arr1 = [5, 4, 2, 1]
solution(4, arr1)

function solution(n, arr) {
    const ans = new Array(n).fill(1)
    for (let i = 0; i < n; i++) {
        if (ans[i]) {
            if (arr[i - 1] > arr[i]) {
                ans[i - 1] += ans[i]
            }
            if (arr[i + 1] > arr[i]) {
                ans[i + 1] += ans[i]
            }
        }
    }
    console.log(ans);
    console.log(Math.max(...ans));
}


/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-09-09 17:07:49
 * @LastEditors: JA
 */
const arr1 = [5, 4, 2, 1]
solution(4, arr1)

function solution(n, arr) {
    let ans = 1
    for (let i = 0; i < n; i++) {
        let max = 1
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                break
            }
            max++
        }
        for (let k = i + 1; k < n; k++) {
            if (arr[k] > arr[k - 1]) {
                break
            }
            max++
        }
        ans = Math.max(ans, max)
    }
    console.log(ans);
    // return ans
}
