/*
 * @Author: JA
 * @Date: 2022-03-25 17:48:53
 * @LastEditTime: 2022-03-25 17:53:38
 * @LastEditors: JA
 */

function lazy(cur) {
    let n = cur
    // function add(num) {
    //     this.numbase = num
    // }

    // function tap() {

    // }

    // function delay(delayTime) {
    //     let delayTime = delayTime
    // }

    // function multiply() {

    // }

    // function output() {
    //     console.log(this.numbase);
    // }

    return {
        n: n,
        add: (num)=>{
            this.numbase = num
        },
        // tap: tap,
        // dealay: delay,
        // multiply: multiply,
        output: ()=>{
            console.log(this.numbase);
        }
    }

}

const lazyCalc = lazy(2)
console.log(lazyCalc);
lazyCalc.add(2)
lazyCalc.output()