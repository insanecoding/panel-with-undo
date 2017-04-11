import {InitialState} from "./../store/initial";
import {
    BUTTON_CLICKED
} from "../constants/constants";

const panelReducer = (state = InitialState, action) => {

    switch (action.type) {

        case BUTTON_CLICKED: {
            return {
                ...state,
                ...{showPanel: !state.showPanel}
            };
        }

        default:
            return state;
    }
};

export default panelReducer;