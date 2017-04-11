import {
    BUTTON_CLICKED,
    ADD_ITEM
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

export {buttonClicked, addItem}