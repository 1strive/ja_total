/*
 * @Author: JA
 * @Date: 2022-09-18 15:10:13
 * @LastEditTime: 2022-09-23 17:37:05
 * @LastEditors: JA
 */


function throttle(fn, delay) {
    let timer
    return function (...args) {
        if (!timer) {
            fn.apply(this, args)
            timer = setTimeout(() => {
                timer = null
            }, delay);
        }
    }
}

function debounce(fn, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


// setTimeout(console.log, 100, 2)
