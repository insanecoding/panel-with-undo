import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import configureStore from "./store/configureStore";
import panelReducer from "./reducers/panelReducer";

const reducer = combineReducers({
    panelReducer
});

const store = configureStore({}, reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
