<<<<<<< HEAD

let arr = [1, 2, 3, 0, 4, 0]

let zero = []
let ans = arr.filter((i) => {
    if (i === 0) {
        zero.push(0)
    }
    return i !== 0
})
ans = ans.concat(zero)
console.log(ans, zero);
=======
/*
 * @Author: JA
 * @Date: 2022-06-09 20:43:59
 * @LastEditTime: 2022-08-26 16:21:39
 * @LastEditors: JA
 */


const vm = new WeakMap()

class User {
    constructor(id) {
        this.idProperty = Symbol('id')
        this.setId('id')
    }

    setPrivate(property, value) {
        const privateMembers = vm.get(this) || {}
        privateMembers[property] = value
        vm.set(this, privateMembers)
    }

    getPrivate(property) {
        return vm.get(this)[property]
    }

    setId(id) {
        this.setPrivate(this.idProperty, id)
    }

    getId() {
        return this.getPrivate(this.idProperty)
    }
}

const user = new User(123)
alert(user.getId())
user.setId(456)
alert(user.getId())
alert(vm.get(user)[user.idProperty])
>>>>>>> 63c743e4333a14dbf2c6c8667ce432a1374c963a
