import {InitialState} from './../store/initial';
import {
    ITEM_ADDED, INPUT_CHANGED, REMOVE_BUTTON_CLICKED,
    MENU_TOGGLED, RESTORE_BUTTON_CLICKED
} from '../constants/constants';
import Immutable from 'immutable';

const panelReducer = (state = InitialState, action) => {

    switch (action.type) {

        case MENU_TOGGLED: {
            const mode = action.mode;
            let isOpen = false;
            if (mode === 'open') {
                isOpen = true;
            }
            return state.setIn(['showPanel'], isOpen);
        }

        case ITEM_ADDED: {
            const newObj = Immutable.fromJS({
                text: "",
                isDisabled: false,
                oldText: ""
            });
            let prevArr = state.getIn(['items']);
            return state.setIn(['items'], prevArr.push(newObj));
        }

        case INPUT_CHANGED: {
            const {index, value} = action;
            return state.setIn(['items', index, 'text'], value);
        }

        case REMOVE_BUTTON_CLICKED: {
            const {index} = action;
            const oldText =  state.getIn(['items', index, 'text']);
            const newObj = Immutable.fromJS({
                text: "",
                isDisabled: true,
                oldText: oldText
            });

            return state.setIn(['items', index], newObj);
        }

        case RESTORE_BUTTON_CLICKED: {
            const {index} = action;
            const willBeText =  state.getIn(['items', index, 'oldText']);
            const newObj = Immutable.fromJS({
                text: willBeText,
                isDisabled: false,
                oldText: ""
            });

            return state.setIn(['items', index], newObj);
        }

        default:
            return state;
    }
};

export default panelReducer;