
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个解。


// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
const arr = [-1, 2, 1, -4]
const target = 1
const ans = threeSumClosest(arr, target)
console.log(ans, 'ans');
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b)
    let len = nums.length
    let min = Number.MAX_VALUE
    let ans
    let temp = []
    for (let a = 0; a < len; a++) {
        for (let b = a + 1; b < len; b++) {
            let c = len - 1
            while (c > b) {
                temp.push(nums[a], nums[b], nums[c])
                const res = temp.reduce((a, b) => a + b)
                const comp = Math.abs(res - target)
                if (comp < min) {
                    min = comp
                    ans = res
                }
                temp = []
                c--
            }
        }
    }
    return ans
}
