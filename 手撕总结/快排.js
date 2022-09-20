/*
 * @Author: JA
 * @Date: 2022-09-16 00:50:01
 * @LastEditTime: 2022-09-16 01:38:12
 * @LastEditors: JA
 */

const arr = [4, 2, 8, 0, 5, 1]
function quickSort(arr) {
    if (arr.length === 0) {
        return []
    }
    let judge = arr.shift()
    let left = []
    let right = []
    for (const i of arr) {
        if (i <= judge) {
            left.push(i)
        } else {
            right.push(i)
        }
    }
    return [...quickSort(left), judge, ...quickSort(right)]
}

console.log(quickSort(arr));