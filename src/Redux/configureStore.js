import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initalState) {
  const composeEnchancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // This will add support for Redux Dev Tools. This avoids name collision
  return createStore(
    rootReducer,
    initalState,
    composeEnchancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}

// componseEnchancers calls applyMiddleware and reduxImmutableStateInvariant is a piece of middleware we're using. Now we'll be able to interact with our Redux store using the Redux Dev tools in the browser
