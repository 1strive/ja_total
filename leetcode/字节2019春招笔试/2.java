/*
 * @Author: JA
 * @Date: 2022-03-12 17:18:12
 * @LastEditTime: 2022-03-12 17:39:20
 * @LastEditors: JA
 */


//乘积为正子序列
 int[] arr = new int[]{1,1,1,-1,-1,-1};

 public int Max(int[] arr) {
      int max = 0 //正数数量
      int min = 0 //负数数量
      for (int i = 0; i < arr.length; i++) {
        if (arr[i] == 1) max++
        if (arr[i] == -1) min++
    }

    int minAns = parseInt(min / 2) + 1
    int ans = 0
    ans = (max + 1) * minAns
    return ans
 }
