/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-08-09 12:34:36
 * @LastEditors: JA
 */
function Test() {

    this.pub = function () {
        console.log(this, 'this');
    }
    // this.pub()
    console.log(this, 'asdasdasd');
}

const a = new Test()
a.pub()