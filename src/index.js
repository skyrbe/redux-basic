import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//a middleware is just a function which returns a function which returns a function
console.info = function(){};
console.warn = function(){};
const logColor = (message,logType,color) => {
  const styles = `
    background:#EEE;
    color:${color};
    min-height:40px;
    float:left;
    padding:5px 10px;
    border:1px solid goldenrod;
    border-radius:3px;
    font-size:18px;
    text-decoration: ${logType == 'prestate' ? 'line-through' : 'default'}
  `;
  console.log('%c'+message, styles);
}

const logger = (store) => next => action => {
      logColor(`Dispatched action ${JSON.stringify(action)}`,'action','rebeccapurple');
      //console.log(action);
      logColor(`Dispatched action ${JSON.stringify(store.getState())}`,'prestate','tomato');
      //console.log("state before action ", store.getState());
      const result = next(action);
      logColor(`Dispatched action ${JSON.stringify(store.getState())}`,'poststate','teal')
      //console.log("state after action ", store.getState());
      return result;
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
