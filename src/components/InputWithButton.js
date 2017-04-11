import React, {PropTypes} from 'react';
import {FormControl, Button, Row, Col} from 'react-bootstrap';

const InputWithButton = ({name, value, onChange, onRemove, onRestore}) => {

    return (
            <Row>
                <Col xs={12} md={9}>
                    <FormControl componentClass="textarea"
                                 placeholder="input your text here" name={name}
                                 value={value}
                                 onChange={onChange}
                                 disabled={true}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Button bsStyle="warning" name={name} onClick={onRemove}>Remove</Button>
                    <Button bsStyle="success" name={name} onClick={onRestore}>Restore</Button>
                </Col>
            </Row>
    );
};

InputWithButton.propTypes = {
    name: PropTypes.string.isRequired,
    value:  PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRestore: PropTypes.func.isRequired
};

export default InputWithButton;