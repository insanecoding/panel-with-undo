import InitialState from "./../store/initial";
import {
    BUTTON_CLICKED
} from "../constants/constants";

const panelReducer = (state = InitialState, action) => {
    switch (action.type) {

        case BUTTON_CLICKED: {
            InitialState.showPanel = !InitialState.showPanel;
            console.log(InitialState);
            return InitialState;
        }

        default:
            return state;
    }
};

export default panelReducer;