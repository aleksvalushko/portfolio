import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';
import stateReducer from "./redux/stateReducer";
import {Provider} from "react-redux";


let reducers = combineReducers({
        form: formReducer,
        state: stateReducer
    }
);

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App state={stateReducer}/>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
