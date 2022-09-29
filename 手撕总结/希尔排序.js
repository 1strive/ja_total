/*
 * @Author: JA
 * @Date: 2022-09-18 16:40:17
 * @LastEditTime: 2022-09-23 16:31:59
 * @LastEditors: JA
 */
const arr = [4, 3, 8, 0, 5, 1]
ShellSort(arr)
console.log(arr);


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