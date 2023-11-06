import {createStore, applyMiddleware, compose} from  'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);