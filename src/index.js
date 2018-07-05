import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducer';
import './index.css';
import App from './App';

ReactDOM.render(
    <Provider store={applyMiddleware()(createStore)(rootReducer)}>
        <App />
    </Provider>,
     document.getElementById('root'));
