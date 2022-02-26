/*
 * @Author: ja
 * @Date: 2021-12-27 16:21:57
 * @LastEditors: ja
 * @LastEditTime: 2021-12-27 17:12:37
 */
//a===1&&a===2&&a===3 为 true

// class A {
//     constructor(value) {
//         this.value = value
//     }

//     valueOf() {
//         return this.value++
//     }
// }

// const a = new A(1)
// // 双等号(==)：会触发隐式类型转换，所以可以使用 valueOf 或者 toString 来实现。
// // 每次判断都会触发valueOf方法，同时让value+1，才能使得下次判断成立。
// if (a == 1 && a == 2 && a == 3) {
//     console.log('成立');
// }


// 全等(===)：严格等于不会进行隐式转换，这里使用 Object.defineProperty 数据劫持的方法来实现


let value = 1;
Object.defineProperty(window, 'a', {
    get() {
        return value++
    },

    set(newvalue) {
        console.log('改了',newvalue);
        this.value = newvalue
    }
})
a = 3
console.log(value);


console.log(a);

if (a === 1 && a === 2 && a === 3) {
    console.log("严格等于")
}