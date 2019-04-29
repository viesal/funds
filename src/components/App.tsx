import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Routes } from '../router';
import { reducers } from '../store';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
const history = createBrowserHistory({ basename: baseUrl});
const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
});

const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware(history)) );

export const App: React.FC = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>
);
