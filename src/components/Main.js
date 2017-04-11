import React, {PropTypes} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import RightSideInput from "./RightSideElement";
import LeftSideView from "./LeftSideElement";

const Main = ({isPanelOn, addItem, inputChanged, hidePanel, items, onRemoveButton}) => {

    const clicked = (e) => {
        if (e.target.name === "add") {
            addItem();
        } else if (e.target.name === "close") {
            hidePanel();
        }
    };

    const onChange = (e) => {
        inputChanged(e.target.name, e.target.value);
    };

    return (
        <div className="main">
            <Jumbotron>
                <h1>Panel with time travel</h1>
                <p>Just try it! You'll get undo/redo capabilities for free!</p>
            </Jumbotron>

            {
                (isPanelOn === true)
                    ?
                    <div>
                        <Grid>
                            <Row>
                                <Col xs={6}>
                                    <h2>Your text will be here</h2>
                                    <Button bsStyle="danger" name="close" onClick={clicked}>Close Menu</Button>
                                    <LeftSideView items={items}/>
                                </Col>
                                <Col xs={6}>
                                    <h2>Your input is here</h2>
                                    <Button bsStyle="success" name="add" onClick={clicked}>Add item</Button>
                                    <RightSideInput items={items}
                                                    onChange={onChange}
                                                    onRemoveButton={onRemoveButton}
                                    />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                    :
                    null
            }

        </div>
    )
};


Main.propTypes = {
    isPanelOn: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired,
    hidePanel: PropTypes.func.isRequired,
    inputChanged: PropTypes.func.isRequired,
    onRemoveButton: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default Main;