import {InitialState} from "./../store/initial";
import {
    ADD_ITEM,
    INPUT_CHANGED, REMOVE_BUTTON_PRESSED
} from "../constants/constants";
import Immutable from "immutable";
import undoable from 'redux-undo-immutable';

const panelReducer = (state = InitialState, action) => {

    switch (action.type) {

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

const undoablePanelReducer = undoable(panelReducer, {
    limit: 0
});

export default undoablePanelReducer ;