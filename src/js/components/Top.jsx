import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
export default class Top extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>Top</h2>
        <Link to="/about"> About </Link>
      </div>
    );
  }
}
