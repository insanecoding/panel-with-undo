import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './RightSideElement.css';
import Immutable from 'immutable';

const LeftSideView = ({items}) => {

    return (
        <div className='inputs'>
            <ListGroup>
                {
                    items.map((item, currIdx) =>
                        <ListGroupItem key={currIdx}> {item.toObject().text} </ListGroupItem>
                    )
                }
            </ListGroup>
        </div>
    );
};


LeftSideView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(Immutable.Map)).isRequired,
};

export default LeftSideView;