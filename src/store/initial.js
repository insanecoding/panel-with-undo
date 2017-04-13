import Immutable from "immutable";

export const InitialState = Immutable.fromJS({
    items: [
        {
            text: "",
            isDisabled: false
        }
    ]
});

export const ShowPanel = Immutable.fromJS({
    showPanel: false
});