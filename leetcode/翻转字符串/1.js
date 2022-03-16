// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。


function reverseStr(arr) {
    let temp = ''
    const len = Math.floor(arr.length / 2)
    for (let i = 0; i < len; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - 1 - i] = temp
    }
    s = arr.join('')
    return s
}

let s = ["h","e","l","l","o"]
const ans = reverseStr(s)
console.log(s);