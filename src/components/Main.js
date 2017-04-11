import React, {PropTypes} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";

const Main = ({isPanelOn}) => {

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
                                    <Button bsStyle="danger" name="close" onClick={}>Close Menu</Button>
                                </Col>
                                <Col xs={6}>
                                    <h2>Your input is here</h2>
                                    <Button bsStyle="success" name="add" onClick={}>Add item</Button>
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
    isPanelOn: PropTypes.bool.isRequired
};

export default Main;