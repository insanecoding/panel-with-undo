import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

export default function configureStore(initialState, rootReducer) {
    const logger = createLogger();
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger));
}