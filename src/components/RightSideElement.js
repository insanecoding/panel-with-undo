import React, {PropTypes} from 'react';
import InputWithButton from './InputWithButton';
import "./RightSideElement.css";
import Immutable from "immutable";

let RightSideInput = ({items, onChange, onRemoveButton, undo}) => {

    const onRemove = (e) => {
        onRemoveButton(e.target.name);
    };

    const onRestore = () => {
        undo();
    } ;

    return (
        <div className="inputs">
            {
                items.map((item, currIdx) => {

                        const param = {
                            name: currIdx + "",
                            value: item,
                            onChange: onChange,
                            onRemove: onRemove,
                            onRestore: onRestore
                        };

                        return (
                            <div className="single-input" key={currIdx}>
                                <InputWithButton {...param} />
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

RightSideInput.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(Immutable.Map)).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemoveButton: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired
};

export default RightSideInput;