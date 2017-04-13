import {
    ADD_ITEM,
    INPUT_CHANGED,
    REMOVE_BUTTON_PRESSED,
    BUTTON_CLICKED,
    RESTORE_BUTTON_PRESSED
} from "../constants/constants";

const buttonClicked = (mode) => {
    return {
        type: BUTTON_CLICKED,
        mode: mode
    }
};

const addItem = () => {
    return {
        type: ADD_ITEM
    }
};

const inputChanged = (index, inputVal) => {
    return {
        type: INPUT_CHANGED,
        index: index,
        value: inputVal
    }
};

const onRemoveButton = (index) => {
    return {
        type: REMOVE_BUTTON_PRESSED,
        index: index
    }
};

const onRestoreButton = (index) => {
    return {
        type: RESTORE_BUTTON_PRESSED,
        index: index
    }
};

export {addItem, inputChanged, onRemoveButton, buttonClicked, onRestoreButton}