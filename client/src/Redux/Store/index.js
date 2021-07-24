import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "../Reducer/index.js";
import thunk from "redux-thunk";
import { loadState, saveState } from '../../localStorage'

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
    saveState({recipes: store.getState().recipes})
})
export default store;