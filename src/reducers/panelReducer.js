import {InitialState} from "./../store/initial";
import {
    BUTTON_CLICKED,
    ADD_ITEM,
    INPUT_CHANGED, REMOVE_BUTTON_PRESSED
} from "../constants/constants";
import Immutable from "immutable";

const panelReducer = (state = InitialState, action) => {

    switch (action.type) {

        case BUTTON_CLICKED: {
            let prevVal = state.getIn(['showPanel']);
            return state.setIn(['showPanel'], !prevVal);
        }

        case ADD_ITEM: {
            const newObj = Immutable.fromJS({
                    text: "",
                    isDisabled: false
                });
            let prevArr = state.getIn(['items']);
            return state.setIn(['items'], prevArr.push(newObj));
        }

        case INPUT_CHANGED: {
            const {index, value} = action;
            return state.setIn(['items', index, "text"], value);
        }

        case REMOVE_BUTTON_PRESSED: {
            const {index} = action;
            return state.setIn(['items', index, "text"], "")
                .setIn(['items', index, "isDisabled"], true);
        }


        default:
            return state;
    }
};

export default panelReducer;