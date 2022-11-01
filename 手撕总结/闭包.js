/*
 * @Author: JA
 * @Date: 2022-10-19 17:26:26
 * @LastEditTime: 2022-10-19 17:32:32
 * @LastEditors: JA
 */
function slo(i) {
    return function () {
        setTimeout(() => {
            console.log(i);
        }, 0);
    }
}
for (var i = 0; i < 3; i++) {
    slo(i)()
}//0 1 2

function a() {
    let b = 21
    return function () {
        console.log(b);
    }
}

let aa = 333
const obj = {
    aa: 2,
    b() {
        console.log(this.aa);//2
        console.log(aa);//333
        return function(){
            console.log(this);//window
        }
    }
}
obj.b()
a()()//21  

// 红宝书p312