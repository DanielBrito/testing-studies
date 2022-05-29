import { applyMiddleware, compose, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware, routerReducer } from "react-router-redux";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";

import { books } from "./redux/reducers";
import { details } from "./redux/reducers";
import { errors } from "./redux/reducers";

const rootReducer = combineReducers({
  routing: routerReducer,
  books,
  details,
  errors,
});

export const history = createBrowserHistory();

const initialState = {};
const middlewares = [thunk, routerMiddleware(history)];

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = configureStore({
  reducer: rootReducer,
  initialState,
  composedEnhancers,
});

export default store;
