import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
