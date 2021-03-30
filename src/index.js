import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import App from './App/App'
import { rootReducer } from './redux/rootReducer';
import configureStore from './redux/configureStore';

ReactDOM.render(
    <Provider store={configureStore({ repository: {} },rootReducer)}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,document.getElementById("root"))