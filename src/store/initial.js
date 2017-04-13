import Immutable from "immutable";

export const InitialState = Immutable.fromJS({
    items: [
        {
            text: "",
            isDisabled: true
        },
        {
            text: "foo",
            isDisabled: false
        }
    ]
});

export const ShowPanel = Immutable.fromJS({
    showPanel: false
});