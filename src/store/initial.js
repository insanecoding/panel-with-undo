import Immutable from "immutable";

export const InitialState = Immutable.fromJS({
    showPanel: false,
    items: [
        {
            text: "",
            isDisabled: false,
            oldText: ""
        }
    ]
});