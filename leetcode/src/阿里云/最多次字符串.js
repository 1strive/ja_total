// 一种数组查重算法：
//引申出查询出现最多次数的数字
const arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9, 8]

function maxArr(arr) {
    const ans = []
    let len = arr.length
    const res = new Array(10).fill(0)
    for (let i = 0; i < len; i++) {
        let cur = arr[i]
        res[arr[i]]++
    }
    for (let i = 0; i < len; i++) {
        if (res[i] === Math.max(...res)) {
            ans.push(i)
        }
    }


    return ans.join()
}
const ans = maxArr(arr)
console.log(ans);


//出现多的字符串

const strArr = ['asd', 'sdd', 'acc', 'ja', 'ja', 'asd', 'gmt', 'gz', 'gz', 'gz', 'asd', 'asd']

function maxStr(strArr) {
    const res = {}
    const ans = []
    let len = strArr.length
    for (let i = 0; i < len; i++) {
        if (res[strArr[i]]) {
            res[strArr[i]]++
        } else {
            res[strArr[i]] = 1
        }
    }
    for (const ele in res) {
        ans.push(ele)
    }
    ans.sort((a, b) => res[b] - res[a])
    return ans.join(' ')
}

const ansStr = maxStr(strArr)
console.log(ansStr);