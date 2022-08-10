/*
 * @Author: JA
 * @Date: 2022-06-10 22:00:55
 * @LastEditTime: 2022-06-12 01:48:21
 * @LastEditors: JA
 */
// 装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MyTestableClass = /** @class */ (function () {
    function MyTestableClass() {
    }
    MyTestableClass = __decorate([
        testable
    ], MyTestableClass);
    return MyTestableClass;
}());
function testable(target) {
    target.isTestable = true;
}
MyTestableClass.isTestable; // true
