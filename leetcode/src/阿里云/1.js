/*
 * @Author: JA
 * @Date: 2022-03-25 17:37:41
 * @LastEditTime: 2022-03-26 15:21:39
 * @LastEditors: JA
 */
// const lazyCalc = lazy(2)
  // .add(2)
  // .tap(console.log)
  // .delay(1000)
  // .multiply(3)
//
// setTimeout(() => {
  // lazyCalc.output();
// }, 1000);
//
// console.log('start');

// 输出：
// start
// 等待1秒
// 4
// 等待1秒
// 12
function lazy(cur) {
    let n = cur
    return {
        n: n,
        add: function add(num) {  //加法
            this.addAns = this.n + num
        },
        tap: function tap(fn) {
            this.fn = fn
        },
        delay: function delay(delayTime) {
            this.delayTime = delayTime
        },

        multiply: function multiply(num) { //乘法
            this.mul = this.addAns * num
        },
        output: function output() {
            this.fn(this.addAns);
            setTimeout(() => {
                this.fn(this.mul)
            }, this.delayTime);
        }
    }
}

const lazyCalc = lazy(2)


lazyCalc.add(2)
lazyCalc.tap(console.log)
lazyCalc.delay(1000)
lazyCalc.multiply(3)

setTimeout(() => {
    lazyCalc.output();
}, 1000);

console.log('start');

const map = new Map([['s', 2], ['d', 1], ['c', 5], ['o', 5]])
const val = map.values()

let cur = 0


// 找出字符串的最长连续子串
// 例子 'abcddderffeed' => ['ddd']
// 例子 'abcddderffeeed' => ['ddd','eee']
for (const ele of map) {
    if (ele[1] >= cur) {
        cur = (ele[1])
    }
}
console.log(cur, 'cur');

const ans = []
map.forEach((val, key) => {
    if (val === cur) {
        console.log(key);
        let res = new Array(cur).fill(0).map(() => {
            return key
        })
        ans.push(res.join(''))
    }
})
console.log(ans);