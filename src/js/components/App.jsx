import React from 'react';
export default class App extends window.React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <h1>App</h1>
        {this.props.children}
      </div>
    );
  }
}
