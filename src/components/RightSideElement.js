import React, {PropTypes} from 'react';
import InputWithButton from './InputWithButton';
import "./RightSideElement.css";

const RightSideInput = ({items, onChange}) => {

    const onRemove = (e) => {
        console.log(e.target.name, "pressed remove");
    };

    const onRestore = (e) => {
        console.log(e.target.name, "pressed revert");
    };

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

/*
 items is array of ImmutableJS's Maps!
 */
RightSideInput.propTypes = {
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default RightSideInput;