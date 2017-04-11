import Immutable from "immutable";

export const InitialState = Immutable.fromJS({
    showPanel: false,
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