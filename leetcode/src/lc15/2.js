const nums = [-1, 0, 1, 2, -1, -4]
const arr = [0, 0, 0, 0]
const ans = threeSum(nums)
console.log(ans, 'ans');
//排序加指针
function threeSum(nums) {
    let n = nums.length
    nums.sort((a, b) => a - b)
    let ans = []
    for (let first = 0; first < n; first++) {
        if (first > 0 && nums[first] === nums[first - 1]) continue
        let third = n - 1
        let target = - nums[first]
        for (let second = first + 1; second < n; second++) {
            if (second > first + 1 && nums[second] == nums[second - 1]) continue
            while (second < third && nums[second] + nums[third] > target) {
                --third
            }
            if (second == third) break
            if (nums[second] + nums[third] === target) {
                let temp = []
                temp.push(nums[first])
                temp.push(nums[second])
                temp.push(nums[third])
                ans.push(temp)
                temp = []
            }
        }
    }
    return ans
};
