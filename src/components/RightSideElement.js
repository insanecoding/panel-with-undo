import React, {PropTypes} from 'react';
import InputWithButton from './InputWithButton';
import "./RightSideElement.css";

const RightSideInput = ({items, onChange}) => {

    return (
        <div className="inputs">
            {
                items.map((item, currIdx) => {
                        return (
                            <div className="single-input" key={currIdx}>
                                <InputWithButton name={currIdx + ""}  value={item} onChange={onChange} />
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

RightSideInput.propTypes = {
    items: PropTypes.array.isRequired,
    onChange:  PropTypes.func.isRequired
};

export default RightSideInput;