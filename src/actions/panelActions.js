import {
    BUTTON_CLICKED,
    ADD_ITEM,
    INPUT_CHANGED,
    REMOVE_BUTTON_PRESSED
} from "../constants/constants";


const buttonClicked = () => {
    return {
        type: BUTTON_CLICKED
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

export {buttonClicked, addItem, inputChanged, onRemoveButton}