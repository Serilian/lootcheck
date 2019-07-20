import React from 'react';
import {render} from "react-dom";
import App from './components/App.js';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import balance from './store/reducers/balance';

const rootReducer = combineReducers({
    balance
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(app, document.getElementById('root'));