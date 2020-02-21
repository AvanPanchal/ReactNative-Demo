/**
 * @format
 */
import React, { component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';
import { reducerCounter, otherCounter } from './src/reducers/reducerCounter';
import { textinputCounter } from './src/reducers/textinpureducer';

const store = createStore(
    reducers,
    applyMiddleware(thunk),

);
//const store = createStore(textinputCounter);

const Container = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>)
}

AppRegistry.registerComponent(appName, () => Container);


