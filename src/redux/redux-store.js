import { createStore } from "redux";
import timerReducer from "./timer-reducer";

const store = createStore(timerReducer);

window.store = store

export default store;