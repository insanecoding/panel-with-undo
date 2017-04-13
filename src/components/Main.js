import React, {PropTypes} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";

const Main = ({children, isPanelOn, addItem, hidePanel}) => {

    const clicked = (e) => {
        if (e.target.name === "add") {
            addItem();
        } else if (e.target.name === "close") {
            hidePanel("close");
        }
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
                                { children[0] }

                            </Col>
                            <Col xs={6}>
                                <h2>Your input is here</h2>
                                <Button bsStyle="success" name="add" onClick={clicked}>Add item</Button>
                                { children[1] }
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
    children: PropTypes.array,
    isPanelOn: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired,
    hidePanel: PropTypes.func.isRequired
};

export default Main;