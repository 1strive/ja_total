
let arr = [1, 2, 3, 0, 4, 0]

let zero = []
let ans = arr.filter((i) => {
    if (i === 0) {
        zero.push(0)
    }
    return i !== 0
})
ans = ans.concat(zero)
console.log(ans, zero);