// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a)
    const ans = nums.splice(k - 1, 1)
    return ans
};

const arr = [3, 2, 1, 5, 6, 4]
findKthLargest(arr,2)