import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { fetchMessageWatcher } from "../actions/sagas";
import rootReducer from "../reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchMessageWatcher);

export default store;
