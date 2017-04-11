import React, {PropTypes} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import "./RightSideElement.css";

const LeftSideView = ({items}) => {

    return (
        <div className="inputs">
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

/*
 items is array of ImmutableJS's Maps!
 */
LeftSideView.propTypes = {
    items: PropTypes.array.isRequired
};

export default LeftSideView;