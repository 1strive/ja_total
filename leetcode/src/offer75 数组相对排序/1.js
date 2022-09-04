/*
 * @Author: JA
 * @Date: 2022-08-21 00:53:45
 * @LastEditTime: 2022-08-21 01:31:42
 * @LastEditors: JA
 */

const arr1 = [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31], arr2 = [2,42,38,0,43,21]

function relativeSortArray(arr1, arr2) {
    let ans = []
    for (let i = 0; i < arr2.length; i++) {
        const temp = arr1.map((item) => {
            if (item === arr2[i]) {
                return item
            }
        }).filter((item) => {
            return item !== undefined
        })
        arr1 = arr1.filter((item) => {
            return item !== arr2[i]
        })
        ans.push(...temp)
    }
    ans.push(...arr1.sort((a, b) => a - b))
    return ans
};

const ans = relativeSortArray(arr1, arr2)
console.log(ans);

// const test = [0, 0, 1]
// const af = test.filter((i) => {
//     return i !== 1
// })
// console.log(af, 'af');