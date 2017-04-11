import React from "react";
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";

const Main = () => {


    return (
        <div className="main">
            <Jumbotron>
                <h1>Panel with time travel</h1>
                <p>Just try it! You'll get undo/redo capabilities for free!</p>
            </Jumbotron>
            <Grid>
                <Row>
                    <Col xs={6}>
                        <h2>Your text will be here</h2>
                        <Button bsStyle="danger">Close Menu</Button>
                        {/*<Button>Close menu</Button>*/}
                    </Col>
                    <Col xs={6}>
                        <h2>Your input is here</h2>
                        <Button bsStyle="success">Add item</Button>
                        {/*<Button>Add item</Button>*/}
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Main;
