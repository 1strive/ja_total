/*
 * @Author: JA
 * @Date: 2022-09-16 12:35:05
 * @LastEditTime: 2022-09-16 21:54:09
 * @LastEditors: JA
 */

//全排列 允许重复数字
//若递归中需要使用引用数据类型，需要取副本

//set去重
function permutation(s) {
    const res = new Set()
    const arr = []
    function dfs(path) {
        if (path.length === s.length) {
            const tmp = path.join('j')
            res.add(tmp)
            return
        }
        for (let i = 0; i < s.length; i++) {
            if (arr.includes(i)) {
                continue
            } else {
                arr.push(i)
                path.push(s[i])
                dfs(path)
                path.pop()
                arr.pop()
            }
        }
    }
    dfs([])
    const ans = [...res].map((i) => {
        return i.split('j').map(i => Number(i))
    })
    return ans
}


//优化方法进行去重
function permuteUnique(s) {
    const ans = []
    const arr = []
    function dfs(path) {
        if (path.length === s.length) {
            ans.push(path.slice())
            return
        }
        for (let i = 0; i < s.length; i++) {
            if (arr[i] || (i > 0 && s[i] === s[i - 1] && !arr[i - 1])) { //!arr[i - 1]表示上一轮遍历完毕
                continue
            } else {
                arr[i] = true
                path.push(s[i])
                dfs(path)
                path.pop()
                arr[i] = false
            }
        }
    }
    s.sort((a, b) => a - b)
    dfs([])
    return ans
};

const s = [-1, -1, 2]
permuteUnique(s)
