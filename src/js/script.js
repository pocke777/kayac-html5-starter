import React from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router'

import App   from './components/App.jsx';
import About from './components/About.jsx';
import Top   from './components/Top.jsx';

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Top} />
      <Route path='/about' component={About} />
    </Route>
  </Router>), document.querySelector('#app')
);
