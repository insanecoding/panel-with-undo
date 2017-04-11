import React, {PropTypes} from 'react';
import {FormControl, Button, Row, Col} from 'react-bootstrap';

const InputWithButton = ({name, value}) => {

    return (
            <Row>
                <Col xs={12} md={9}>
                    <FormControl componentClass="textarea"
                                 placeholder="input your text here" name={"input" + name}
                                 value={value}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Button bsStyle="success" name={"but" + name}>Remove</Button>
                </Col>
            </Row>
    );
};

InputWithButton.propTypes = {
    name: PropTypes.string.isRequired,
    value:  PropTypes.string.isRequired
};

export default InputWithButton;