
/**
 * @param {character[][]} board
 * @return {boolean}
 */

const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

function isValidSudoku(board) {
    // 创建三个数组来记录位置
    const row = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const col = new Array(9).fill(0).map(() => new Array(9).fill(0))
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== '.') {
                const index = Number(c) - 1
                row[i][index]++;
                col[j][index]++;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (row[i][index] > 1 || col[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false;
                }
            }
        }
    }
    return true;
};


// 一种数组查重算法：
//引申出查询出现最多次数的数字
const arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 7, 8, 8,8,9,8]

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
