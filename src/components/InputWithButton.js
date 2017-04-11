import React, {PropTypes} from 'react';
import {FormControl, Button, Row, Col} from 'react-bootstrap';
import Immutable from "immutable";

const InputWithButton = ({name, value, onChange, onRemove, onRestore}) => {

    // convert ImmutableJS's Map into ordinary JS object and destructure it
    const {isDisabled, text} = value.toObject();

    const renderButtons = (isDisabled) => {
        return (isDisabled === false)
            ?
            <Button bsStyle="warning" name={name} onClick={onRemove}>Remove</Button>
            :
            <Button bsStyle="success" name={name} onClick={onRestore}>Restore</Button>
    };

    return (

        <Row>
            <Col xs={12} md={9}>
                <FormControl componentClass="textarea"
                             placeholder="input your text here" name={name}
                             value={text}
                             onChange={onChange}
                             disabled={isDisabled}
                />
            </Col>
            <Col xs={12} md={3}>
                {renderButtons(isDisabled)}
            </Col>
        </Row>
    );
};

InputWithButton.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.instanceOf(Immutable.Map).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onRestore: PropTypes.func.isRequired
};

export default InputWithButton;