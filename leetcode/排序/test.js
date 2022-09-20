var num = 117
function func1() {

    console.log(this.num);
}
(function () {
    "use strict"
    func1()
})()

"use strict"
function func2() {
    // console.log(this, '2');
    console.log(this.num);
}

setTimeout(function () {
    func2.call(this)
}, 0)