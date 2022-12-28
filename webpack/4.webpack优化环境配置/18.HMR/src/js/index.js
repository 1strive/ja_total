/*
 * @Author: JA
 * @Date: 2020-02-19 16:11:57
 * @LastEditTime: 2021-12-09 11:50:47
 * @LastEditors: JA
 */
// 引入
import print from './print';
import '../css/iconfont.css';
import '../css/index.less';

console.log('index.js文件被加载阿萨asd阿斯顿了~');

print();

function add(x, y) {
  return x + y;
}

console.log(add(1, 323));

if (module.hot) {
  // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
  module.hot.accept('./print.js', function() {
    // 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
    // 会执行后面的回调函数
    print();
  });
}
