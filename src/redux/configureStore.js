import { createStore, combineReducers } from "redux";
import globalSlice from "../redux-toolkit/globalSlice";

const reducer = combineReducers({
  global: globalSlice,
});

const store = createStore(reducer);

export default store;
