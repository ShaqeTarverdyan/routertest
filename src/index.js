import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Apptest from './RouterTest/AppTest';
import App from './App';
import React_Redux_test_App from './React_Redux_test/App';

// import reducer from './Store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './React_Redux_test/Store/reducer';
const store = createStore(reducer);
ReactDOM.render(<Provider store={store}><React_Redux_test_App/></Provider>, document.getElementById('root'));

// const store = createStore(reducer);
// ReactDOM.render(<Provider store={store }><Apptest/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
