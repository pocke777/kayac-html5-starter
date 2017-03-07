import React from 'react';
window.React = React;

import {render} from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router'

// import App   from './components/App.jsx';
// import About from './components/About.jsx';

import Top from './containers/Top.js';

import { createStore } from 'redux';
import { Provider }    from 'react-redux';
import appReducers     from './reducers/index.js';
const store = createStore(appReducers)

// render((
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path='/' component={App}>
//         <IndexRoute component={Top} />
//         <Route path='/about' component={About} />
//       </Route>
//     </Router>
//   </Provider>), document.querySelector('#app')
// );

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Top} />
    </Router>
  </Provider>), document.querySelector('#app')
);
