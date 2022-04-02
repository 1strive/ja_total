
const json = ('{"a":2,"b":{"c":{"d":{"f":4,"g":"4"}},"g":"r"}}')

function par(json) {
    const obj = JSON.parse(json)
    let deep = 1
    let ans = []
    deepObj(obj, deep, ans)
    console.log(ans);
    return Math.max(...ans)
}

function deepObj(obj, deep, ans) {
    for (let i in obj) {
        if (obj[i] instanceof Object) {
            deep++
            ans.push(deep)
            deepObj(obj[i], deep, ans)
        }
    }
}

const ans = par(json)
console.log(ans,'ans');