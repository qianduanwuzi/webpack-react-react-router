import React,{Component,ReactDOM} from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './route/route.js'
import {render} from 'react-dom';
// import createStore from './reducers/creatReducer';
// var Component1 = require('./components/Component1.jsx');
// import Component1 from './module/Component1.jsx';

// let reduxState;
// if (window.__REDUX_STATE__) {
// 	try {
// 		reduxState = __REDUX_STATE__;
// 		__REDUX_STATE__ = {};
// 	} catch (e) {}
// }
// const store = createStore(reduxState);

render((
   <Router  history={browserHistory} routes={routes} />
), document.getElementById('root'))