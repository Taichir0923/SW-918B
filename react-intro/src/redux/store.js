import { combineReducers , legacy_createStore as createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userState } from "./reducers/user";

const reducers = combineReducers({
    userState
});

const middleware = applyMiddleware(...[thunk])

const store = createStore(reducers , {} , composeWithDevTools(middleware));

export default store;