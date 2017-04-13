import React, {PropTypes} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import RightSideInput from "./RightSideElement";
import LeftSideView from "./LeftSideElement";

const Main = ({isPanelOn, addItem, inputChanged, hidePanel, items, ...others}) => {

    const clicked = (e) => {
        if (e.target.name === "add") {
            addItem();
        } else if (e.target.name === "close") {
            hidePanel("close");
        }
    };

    const onChange = (e) => {
        inputChanged(e.target.name, e.target.value);
    };

    const renderJumbotron = () => {
        return (<Jumbotron>
            <h1>Try our panel</h1>
            <p>You can show/hide it, add multiple input fields, remove text or restore it!</p>
            <p>Get started with <code>Open Menu</code> button at the top</p>
        </Jumbotron>);
    };

    const renderChildren = (isPanelOn) => {
        return (
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
                                <RightSideInput items={items} onChange={onChange} {...others}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                :
                null
        );
    };

    return (
        <div className="main">
            {renderJumbotron()}
            {renderChildren(isPanelOn)}
        </div>
    )
};


Main.propTypes = {
    isPanelOn: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired,
    hidePanel: PropTypes.func.isRequired,
    inputChanged: PropTypes.func.isRequired,
    onRemoveButton: PropTypes.func.isRequired,
    onRestoreButton: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

export default Main;