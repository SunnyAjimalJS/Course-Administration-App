import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initalState) {
  const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initalState,
    composeEnchancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
