/*
 * @Author: JA
 * @Date: 2022-08-14 12:52:44
 * @LastEditTime: 2022-08-14 18:04:03
 * @LastEditors: JA
 */

const s = 'loveleetcodedsae'
const c = 'e'
function shortestToChar(s, c) {
    const arr = s.split(c)
    console.log(arr);
    let temp = arr.map((i, index) => {
        let len = i.length
        if (!len) {
            return []
        }
        if (index === 0) {
            const item = new Array(len).fill(0).map((i, index) => {
                return i = len - index
            })
            return item
        }
        if (index === arr.length - 1) {
            const item = new Array(len).fill(0).map((i, index) => {
                return i = index + 1
            })
            return item
        }
        if (len % 2 === 0) {
            const max = len / 2
            const item = new Array(len).fill(0).map((i, index) => {
                if (index < max) {
                    return i = index + 1
                } else {
                    return i = len - index
                }
            })
            return item
        }
        if (len % 2 !== 0) {
            const max = len / 2
            const item = new Array(len).fill(0).map((i, index) => {
                if (index < max) {
                    return i = index + 1
                } else {
                    return i = len - index
                }
            })
            return item
        }

    })
    let ans = []
    for (const ele of temp) {
        ans.push(...ele, 0)
    }
    ans.pop()
    return ans
}

const ans = shortestToChar(s, c)
console.log(ans, 'ans');