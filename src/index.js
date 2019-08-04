import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import {count} from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import watchSaga from './Sagas/countersaga';
const sagamiddleware=createSagaMiddleware();
const createmystore=createStore(count,applyMiddleware(sagamiddleware));
sagamiddleware.run(watchSaga);

ReactDOM.render(<Provider store={createmystore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
