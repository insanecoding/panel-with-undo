import React, {PropTypes} from 'react';
import InputWithButton from './InputWithButton';
import "./RightSideElement.css";

const RightSideInput = ({items}) => {

    return (
        <div className="inputs">
            {
                items.map((item, currIdx) => {
                        return (
                            <div className="single-input">
                                <InputWithButton name={currIdx + ""} key={currIdx} value={item}/>
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
    // addItem:  PropTypes.func.isRequired
};

export default RightSideInput;