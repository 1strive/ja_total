// 堆的定义如下: n个元素的序列{k1, k2, ... , kn}当且仅当满足一下条件时，称之为堆。
// 可以将堆看做是一个完全二叉树。并且，每个结点的值都大于等于其左右孩子结点的值，
// 称为大顶堆；或者每个结点的值都小于等于其左右孩子结点的值，称为小顶堆。

// 堆排序(Heap Sort)是利用堆进行排序的方法。其基本思想为：将待排序列构造成一个大顶堆(或小顶堆)，整个序列的最大值(或最小值)就是堆顶的根结点，将根节点的值和堆数组的末尾元素交换，
// 此时末尾元素就是最大值(或最小值)，然后将剩余的n-1个序列重新构造成一个堆，这样就会得到n个元素中的次大值(或次小值)，如此反复执行，最终得到一个有序序列。


const arr = [4, 2, 8, 0, 5, 1]

HeapSort(arr, arr.length)

console.log(arr);

function HeapAdJust(arr, i, length) {
    var max = i
    var lchild = i * 2 + 1
    var rchild = i * 2 + 2
    if (lchild < length && arr[lchild] > arr[max]) {
        max = lchild
    }
    if (rchild < length && arr[rchild] > arr[max]) {
        max = rchild
    }

    if (max != i) {
        var temp = arr[i]
        arr[i] = arr[max]
        arr[max] = temp

        HeapAdJust(arr, max, length)
    }
}

function HeapSort(arr, length) {
    for (let i = length / 2 - 1; i >= 0; i--) {
        HeapAdJust(arr, i, length)
    }
    console.log(arr);
    for (let i = length - 1; i >= 0; i--) {
        var temp
        temp = arr[i]
        arr[i] = arr[0]
        arr[0] = temp
        HeapAdJust(arr, 0, i)
        console.log(arr);
    }
}