/*
 * @Author: ja
 * @Date: 2022-04-06 16:03:53
 * @LastEditors: ja
 * @LastEditTime: 2022-04-06 17:01:25
 */
function getSmallestString(n, k) {
    const arr = new Array(26).fill(new Array(2).fill(0)).map((i, idx) => {
        return [idx + 1,String.fromCharCode(97 + idx)]
    })
    const map = new Map(arr)
    const ans = new Array(n).fill(0)
    while (k - 26 > n - 1) {
        k = k - 26
        ans[n - 1] = 'z'
        n = n - 1
    }

    let cur = 0
    while (cur < n - 1) {
        ans[cur] = 'a'
        k = k - 1
        cur = cur + 1
    }

    ans[n - 1] = map.get(k)
    return ans.join('')
}

const ans = getSmallestString(3, 27)
console.log(ans);


