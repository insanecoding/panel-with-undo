import {
    BUTTON_CLICKED,
} from "../constants/constants";
import {ShowPanel} from "./../store/initial";

const showReducer = (state = ShowPanel, action) => {

    switch (action.type) {

        case BUTTON_CLICKED: {
            let prevVal = state.getIn(['showPanel']);
            return state.setIn(['showPanel'], !prevVal);
        }

        default:
            return state;
    }
};

export default showReducer;