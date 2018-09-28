
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App';
import ReduxThunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.querySelector("#root")
);


// console.log('stipe key', process.env.REACT_APP_STRIPE_KEY);
// console.log('node environment key', process.env.NODE_ENV);
