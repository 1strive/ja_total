/*
 * @Author: JA
 * @Date: 2022-09-15 17:34:46
 * @LastEditTime: 2022-09-15 17:39:45
 * @LastEditors: JA
 */
function my_instanceof(obj, className) {
    while (obj.__proto__ != null) {
        if (obj.__proto__ === className.prototype) {
            return true
        } else {
            obj = obj.__proto__
        }
    }
    return false
}


class O {

}

const o = new O()

my_instanceof(o, O)
console.log(my_instanceof(o, O));