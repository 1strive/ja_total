/*
 * @Author: JA
 * @Date: 2022-03-27 17:42:21
 * @LastEditTime: 2022-03-27 17:48:38
 * @LastEditors: JA
 */
/**
 * 节流函数 一个函数执行一次后，只有大于设定的执行周期才会执行第二次。有个需要频繁触发的函数，出于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不生效。
 * @param fn要被节流的函数
 * @param delay规定的时间
 */

//建议参考常用高阶函数中月影做法
// function throttle(fn, delay) {
//     //记录上一次函数触发的时间
//     var lastTime = 0;
//     return function () {
//         //记录当前函数触发的时间
//         var nowTime = Date.now();
//         if (nowTime - lastTime > delay) {
//             //修正this指向问题
//             fn.call(this);
//             //同步执行结束时间
//             lastTime = nowTime;
//         }
//     }
// }

function Throttle(fn, time = 500) {//节流  每过规定时间执行一次事件
    let timer;
    return function (...args) {
        console.log(args, 'args');
        if (timer == null) {
            fn.apply(this, args)
            timer = setTimeout(() => {  //返回值timeoutID是一个正整数，表示定时器的编号。这个值可以传递给clearTimeout()来取消该定时器。
                timer = null
            }, time)
        }
    }
}

document.onscroll = throttle(function () {
    console.log('scllor事件被触发了' + Date.now());
}, 200);

/**
 * 防抖函数  一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
// function debounce(fn, delay) {
//     //记录上一次的延时器
//     let timer = null;
//     return function () {
//         //清除上一次的演示器
//         clearTimeout(timer);
//         //重新设置新的延时器
//         timer = setTimeout(function () {
//             //修正this指向问题
//             fn.apply(this);
//         }, delay);
//     }
// }
function debounce(fn, dur) {
    var timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, dur);
    }
}

document.getElementById('btn').onclick = debounce(function () {
    console.log('按钮被点击了' + Date.now());
}, 1000);
// 使用场景：
// 节流：滚动加载更多、搜索框搜的索联想功能、高频点击、表单重复提交……
// 防抖：搜索框搜索输入，并在输入完以后自动搜索、手机号，邮箱验证输入检测、窗口大小 resize 变化后，再重新渲染。