/*
 * @Author: JA
 * @Date: 2022-09-18 16:40:17
 * @LastEditTime: 2022-09-23 16:31:59
 * @LastEditors: JA
 */
const arr = [4, 3, 8, 0, 5, 1]
ShellSort(arr)
console.log(arr);

// const arr = [1, 4, 5, 3, 2, 6]

InsertSort(arr)
console.log(arr);

// 插入排序的基本思想就是将无序序列插入到有序序列中。例如要将数组arr=[4,2,8,0,5,1]排序，可以将4看做是一个有序序列(图中用蓝色标出)，将[2,8,0,5,1]看做一个无序序列。
// 无序序列中2比4小，于是将2插入到4的左边，此时有序序列变成了[2,4]，无序序列变成了[8,0,5,1]。无序序列中8比4大，于是将8插入到4的右边，
// 有序序列变成了[2,4,8],无序序列变成了[0,5,1]。以此类推，最终数组按照从小到大排序。该算法的时间复杂度为O(n^2)。
function InsertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            let temp = arr[i]
            for (let j = i - 1; j >= 0 && temp < arr[j]; j--) {
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
}
function ShellSort(arr) {
    let increasement = arr.length
    let i
    let temp
    // 确定分组的增量
    do {
        increasement = Math.floor(increasement / 3 + 1)
        console.log(increasement,'increasement');
        for (let i = increasement; i < arr.length; i++) {
            if (arr[i] < arr[i - increasement]) {
                temp = arr[i]
                let j
                for (j = i - increasement; j >= 0 && temp < arr[j]; j -= increasement) {
                    arr[j + increasement] = arr[j]
                }
                arr[j + increasement] = temp
            }
            console.log(arr, 'new');
        }
        console.log(arr, 'arr');
    } while (increasement > 1)




}