var nextPermutation = function(nums) {
    let s = (l, r, t) => (t = nums[l], nums[l] = nums[r], nums[r] = t), l = -1, r = nums.length
    for(let i = r; i--;)
        if (nums[i] > nums[i - 1]) l = i - 1, i = 0
    if (l !== -1) 
        for(i = r; i-- > l;)
            if (nums[i] > nums[l]) s(i, l), i = 0
    while (++l < --r) s(l, r)
};
