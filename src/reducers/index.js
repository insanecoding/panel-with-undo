import panelReducer  from "./panelReducer";
import showReducer from "./showReducer";
import {combineReducers} from "redux";

const reducer = combineReducers({
    showReducer,
    panelReducer
});

export default reducer;