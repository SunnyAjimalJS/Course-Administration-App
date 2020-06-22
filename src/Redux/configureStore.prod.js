import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

export default function configureStore(initalState) {
  return createStore(rootReducer, initalState, applyMiddleware(thunk));
}
