import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import history from "../history";
import { routerMiddleware } from 'react-router-redux';


import thunk from "redux-thunk";

const reduxRouterMiddleware = routerMiddleware(history);



const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancer);


// let store = createStore(
//   rootReducer,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
//   )
// );

export default store;
