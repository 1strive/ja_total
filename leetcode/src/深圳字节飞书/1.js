/*
 * @Author: JA
 * @Date: 2022-04-01 18:23:23
 * @LastEditTime: 2022-04-01 18:23:24
 * @LastEditors: JA
 */
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
  }
  
  async function async2() {
    console.log('async2');
  }
  
  console.log('script start');
  
  setTimeout(function() {
    console.log('setTimeout');
  }, 0)
  
  async1();
  
  new Promise(function(resolve) {
    console.log('promise1');
    resolve();
  })
  .then(function() {
    console.log('promise1 then');
    return 'promise1 end';
  })
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log(res);
  });
  
  console.log('script end');
  
  function isValid(str) {
      // todo
  };
  console.log(isValid('()'))
  console.log(isValid('()[]{}'))
  console.log(isValid('(]'))
  console.log(isValid('([)]'))
  console.log(isValid('{[]}'))
  console.log(isValid('(((('))
  
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 str ，判断字符串是否有效。
  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  
  示例 1：
  输入：str = "()"
  输出：true
  
  示例 2：
  输入：str = "()[]{}"
  输出：true
  
  示例 3：
  输入：str = "(]"
  输出：false
  
  示例 4：
  输入：str = "([)]"
  输出：false
  
  示例 5：
  输入：str = "{[]}"
  输出：true
  
  示例 6：
  输入：str = "(((("
  输出：false