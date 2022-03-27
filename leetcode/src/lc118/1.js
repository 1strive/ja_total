/*
 * @Author: JA
 * @Date: 2022-03-13 10:45:26
 * @LastEditTime: 2022-03-13 10:45:26
 * @LastEditors: JA
 */
var generate = (numRows) => {
    var ans = []
    
    for (let i = 0; i <numRows; i++) {
       var tem = []
        for(let j = 0; j <= i;j++){
            if(j == 0 || j == i){
                tem.push(1)
            }else tem.push(ans[i - 1][j - 1] + ans[i - 1][j])
        }
        ans.push(tem)
    }
 return ans
};