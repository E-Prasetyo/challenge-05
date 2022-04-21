import { createStore, compose, applyMiddleware } from "redux";
import thunk  from "redux-thunk"

import  combineReducers  from  "../Reducers";

const middlewereThunk = compose(
  applyMiddleware(thunk),  
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(combineReducers ,middlewereThunk)

export default store