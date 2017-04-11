import React, {PropTypes} from 'react';

const RightSideInput = ({items}) => {

    return (
        <div className="right-side-elem">
            {items.length}
        </div>
    );
};

RightSideInput.propTypes = {
    items: PropTypes.array.isRequired,
    // addItem:  PropTypes.func.isRequired
};

export default RightSideInput;