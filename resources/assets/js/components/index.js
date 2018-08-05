import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers/index';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {custom404} from './custom404';

const store = createStore(reducer,applyMiddleware(promise));


if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/blogs" component={Example}/>
                        <Route exact path="/*" component={custom404}/>
                    </Switch>
            </BrowserRouter>
        </Provider>
        , document.getElementById('root'));
}