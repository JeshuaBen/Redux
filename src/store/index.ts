import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";

const store = createStore(rootReducer);

export default store;

// Esse é o nosso estado global.
