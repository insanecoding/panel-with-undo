import {
    BUTTON_CLICKED,
    ADD_ITEM,
    INPUT_CHANGED
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

export {buttonClicked, addItem, inputChanged}