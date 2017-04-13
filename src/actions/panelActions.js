import {
    ITEM_ADDED,
    INPUT_CHANGED,
    REMOVE_BUTTON_CLICKED,
    MENU_TOGGLED,
    RESTORE_BUTTON_CLICKED
} from '../constants/constants';

const onMenuToggle = (mode) => {
    return {
        type: MENU_TOGGLED,
        mode: mode
    }
};

const addItem = () => {
    return {
        type: ITEM_ADDED
    }
};

const onInputChange = (index, inputVal) => {
    return {
        type: INPUT_CHANGED,
        index: index,
        value: inputVal
    }
};

const onRemoveButton = (index) => {
    return {
        type: REMOVE_BUTTON_CLICKED,
        index: index
    }
};

const onRestoreButton = (index) => {
    return {
        type: RESTORE_BUTTON_CLICKED,
        index: index
    }
};

export {addItem, onInputChange, onRemoveButton, onMenuToggle, onRestoreButton}