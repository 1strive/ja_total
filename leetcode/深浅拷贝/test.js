/*
 * @Author: ja
 * @Date: 2021-12-29 11:42:24
 * @LastEditors: ja
 * @LastEditTime: 2021-12-29 11:45:47
 */
const obj1 = {
    age: 10,
    sex: "男",
    car: ["奔驰", "宝马", "特斯拉", "奥拓"],
    dog: {
        name: "大黄",
        age: 5,
        color: "黑白色"
    },
    f1: function () {
        console.log(111);
    },
};
let obj2 = {}
function shallowCopy(obj, targetObj) {
    for (let key in obj) {
        targetObj[key] = obj[key]
    }
}
shallowCopy(obj1, obj2)
console.log(obj1);
console.log(obj2);
obj1.age = 23
console.log(obj2);

function deepCopy(obj, targetObj) {
    for (let key in obj) {
        let item = obj[key];
        if (item instanceof Array) {
            targetObj[key] = []
            deepCopy(item, targetObj[key])
        } else if (item instanceof Object) {
            targetObj[key] = []
            deepCopy(item, targetObj[key])
        } else {
            targetObj[key] = obj[key]// 基本类型和方法可以直接赋值
        }
    }
}
const obj3 = {};
deepCopy(obj1, obj3)
console.log(obj1);
obj1.age = 433
console.log(obj3);