import { createStore } from "redux";
import defaultReducer from "./reducer";

const Store = createStore(defaultReducer);

export default Store;
