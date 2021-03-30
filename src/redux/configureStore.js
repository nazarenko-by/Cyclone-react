import { middleware as fetchMiddleware } from "react-redux-fetch";
import { applyMiddleware, compose, createStore } from "redux";

const configureStoreDev = (initialState, rootReducer) => {
  const middleware = [fetchMiddleware];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
};

const configureStoreProd = (initialState, rootReducer) => {
  const middleware = [fetchMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  return store;
};

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
