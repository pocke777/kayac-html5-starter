import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
export default class Top extends React.Component {
  render() {
    const { count, onIncrement, onDecrement } = this.props;
    console.log(this.props);
    return(
      <div>
        <h2>Top</h2>
        {count}
        <button onClick={onIncrement}>+1</button>
        <button onClick={onDecrement}>-1</button>
        <Link to="/about"> About </Link>
      </div>
    );
  }
}
