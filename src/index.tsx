import React from 'react';
import ReactDOM from 'react-dom';
import Thunk  from 'redux-thunk';
import {Provider} from 'react-redux';
import { createStore , applyMiddleware } from 'redux';

import App from './Components/App';
import reducers from './Reducers';

const store = createStore(reducers, applyMiddleware(Thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
