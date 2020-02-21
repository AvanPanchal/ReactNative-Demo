import { combineReducers } from 'redux';


// import otherCounter from './reducerCounter';
import { otherCounter } from '../reducers/reducerCounter'
import { textinputreducer } from '../reducers/textinpureducer';
import asyncReducer from '../reducers/asyncReducer';
import loadReducer from "./loaderReducer";


export default combineReducers({
    counter: otherCounter,
    // textinput: textinputreducer
    todoData: asyncReducer,
    loadValue: loadReducer,
})

