// 1. a==1&&a==2&&a==3 为 true
// const a = {
//     value: 0,
//     valueOf() {    //重写 valueOf()
//         // console.log('val被调用');
//         this.value++
//         return this.value
//     }
// }

// 作用：同valueOf()和toString()一样，但是优先级要高于这两者；
const a = {
    value: 0,
    [Symbol.toPrimitive](hint) {
        console.log(hint);
        this.value++
        return this.value
    }
}
console.log(a == 1 && a == 2 && a == 3);//true


// 2. a===1&&a===2&&a===3 为 true

// ===不触发隐式转换 用数据劫持做

let value = 0
Object.defineProperty(global, 'b', {   //V8环境下可以，node.js中没有window
    get() {
        return ++value
    }
})

console.log(b === 1 && b === 2 && b === 3);
// 上面我们就是劫持全局window(global)上面的a，当a每一次做判断的时候都会
// 触发get属性获取值，并且每一次获取值都会触发一次函数
// 实行一次自增，判断三次就自增三次，所以最后会让公式成立。