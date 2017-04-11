import React, {PropTypes} from 'react';
import {FormControl, Button, Row, Col} from 'react-bootstrap';

const InputWithButton = ({name, value, onChange}) => {

    return (
            <Row>
                <Col xs={12} md={9}>
                    <FormControl componentClass="textarea"
                                 placeholder="input your text here" name={name}
                                 value={value}
                                 onChange={onChange}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Button bsStyle="success" name={name}>Remove</Button>
                </Col>
            </Row>
    );
};

InputWithButton.propTypes = {
    name: PropTypes.string.isRequired,
    value:  PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputWithButton;