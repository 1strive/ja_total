/*
 * @Author: JA
 * @Date: 2022-03-27 20:42:39
 * @LastEditTime: 2022-03-27 22:57:28
 * @LastEditors: JA
 */
/*
 * @Author: JA
 * @Date: 2022-03-27 13:06:30
 * @LastEditTime: 2022-03-27 20:49:19
 * @LastEditors: JA
 */


import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
