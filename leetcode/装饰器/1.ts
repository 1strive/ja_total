/*
 * @Author: JA
 * @Date: 2022-06-10 22:00:55
 * @LastEditTime: 2022-06-12 01:48:21
 * @LastEditors: JA
 */
// 装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。

@testable
class MyTestableClass {
  static isTestable: any;
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true