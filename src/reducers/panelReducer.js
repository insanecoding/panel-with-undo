import {InitialState} from "./../store/initial";
import {
    BUTTON_CLICKED,
    ADD_ITEM
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

        default:
            return state;
    }
};

export default panelReducer;