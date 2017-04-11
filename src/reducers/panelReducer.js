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
            // return Object.assign(
            //     {}, state, {
            //         showPanel: !state.showPanel
            //     }
            // );
        }

        case ADD_ITEM: {

            let prevVal = state.getIn(['items']);
            return state.setIn(['items'], ++prevVal);

            // return Object.assign(
            //     {}, state, {
            //         items: ++state.items
            //     }
            // );
        }

        default:
            return state;
    }
};

export default panelReducer;