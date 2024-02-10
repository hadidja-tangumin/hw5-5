import { legacy_createStore as createStore, combineReducers} from "redux";
import countReducer from "./countReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
    stateCount: countReducer,
    stateProduct: basketReducer
})

export const store = createStore(rootReducer)