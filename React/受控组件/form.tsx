/*
 * @Author: JA
 * @Date: 2022-03-27 20:42:39
 * @LastEditTime: 2022-03-27 20:49:36
 * @LastEditors: JA
 */
/*
 * @Author: JA
 * @Date: 2022-03-27 13:06:30
 * @LastEditTime: 2022-03-27 20:49:19
 * @LastEditors: JA
 */

// 在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）之类的表单元素通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。
// 我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
// 由于在表单元素上设置了 value 属性，因此显示的值将始终为 this.state.value，这使得 React 的 state 成为唯一数据源。由于 handlechange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。
// 对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。

import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    alert('提交的名字: ' + value);
    event.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        名字:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="提交" />
    </form>
  );
}

export default App;
