/*
 * @Author: JA
 * @Date: 2022-09-18 16:39:44
 * @LastEditTime: 2022-09-18 17:00:58
 * @LastEditors: JA
 */
const arr = [1, 2, 3, 4, 5, 6, 7]
function shuffle(arr) {
    let ans = []
    while (arr.length) {
        let idx = parseInt(Math.random() * arr.length)
        const tmp = arr.splice(idx, 1)
        ans.push(...tmp)
    }
    console.log(ans);
}

shuffle(arr)