import {InitialState} from "./../store/initial";
import {
    BUTTON_CLICKED,
    ADD_ITEM,
    INPUT_CHANGED
} from "../constants/constants";

const panelReducer = (state = InitialState, action) => {

    switch (action.type) {

        case BUTTON_CLICKED: {
            let prevVal = state.getIn(['showPanel']);
            return state.setIn(['showPanel'], !prevVal);
        }

        case ADD_ITEM: {
            let prevVal = state.getIn(['items']);
            return state.setIn(['items'], prevVal.push(""));
        }

        case INPUT_CHANGED: {
            const {index, value} = action;
            return state.setIn(['items', index], value);
        }

        default:
            return state;
    }
};

export default panelReducer;