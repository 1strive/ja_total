/*
 * @Author: JA
 * @Date: 2022-09-18 23:48:29
 * @LastEditTime: 2022-09-19 00:41:00
 * @LastEditors: JA
 */
setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function() {
      console.log('promise1')
    })
  }, 0)
  setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(function() {
      console.log('promise2')
    })
  }, 0)