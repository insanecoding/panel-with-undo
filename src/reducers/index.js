import panelReducer  from "./panelReducer";
import undoable, { includeAction } from 'redux-undo';
import {combineReducers} from "redux";
import {
    BUTTON_CLICKED,
    ADD_ITEM,
    INPUT_CHANGED,
    REMOVE_BUTTON_PRESSED, UNDO
} from "../constants/constants";

const reducer = combineReducers({
    undoable(panelReducer, {
        filter: includeAction([BUTTON_CLICKED, ADD_ITEM, INPUT_CHANGED, REMOVE_BUTTON_PRESSED]),
        limit: 1,
        debug: true,
        undoType: UNDO
    });
});

export default reducer;