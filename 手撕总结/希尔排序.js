// 希尔排序(Shell's Sort)在插入排序算法的基础上进行了改进，算法的时间复杂度与前面几种算法相比有较大的改进。其算法的基本思想是：先将待排记录序列分
// 割成为若干子序列分别进行插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行一次直接插入排序。希尔排序(Shell's Sort)在插入排序算法的基础上进行了改进，
// 算法的时间复杂度与前面几种算法相比有较大的改进其算法的基本思想是：先将待排记录序列分割成为若干子序列分别进行插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行一次直接插入排序。

const arr = [4, 3, 8, 2, 5, 1]
ShellSort(arr)
console.log(arr);

let a = 4
let b = a / 3 + 1
console.log(Math.floor(b));//取整

function ShellSort(arr) {

    var increasement = arr.length
    var i
    var temp
    do {
        increasement = Math.floor(increasement / 3 + 1)
        // console.log(increasement);
        for (i = increasement; i < arr.length; i++) {
            if (arr[i] < arr[i - increasement]) {
                temp = arr[i]
                for (var j = i - increasement; j >= 0 && temp < arr[j]; j -= increasement) {
                    arr[j + increasement] = arr[j]
                }
                arr[j + increasement] = temp
            }
            // console.log(arr);
        }
    } while (increasement > 1)

}