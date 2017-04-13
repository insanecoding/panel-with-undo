import React, {PropTypes} from 'react';
import InputWithButton from './InputWithButton';
import "./RightSideElement.css";
import Immutable from "immutable";
import { ActionCreators } from 'redux-undo-immutable';
import { connect } from 'react-redux'

let RightSideInput = ({items, onChange, onRemoveButton, onUndo, clearHistory}) => {

    const onRemove = (e) => {
        onRemoveButton(e.target.name);
    };

    const onRestore = () => {
        onUndo();
    } ;

    return (
        <div className="inputs">
            {
                items.map((item, currIdx) => {

                        const param = {
                            name: currIdx + "",
                            value: item,
                            onChange: onChange,
                            onRemove: onRemove,
                            onRestore: onRestore
                        };

                        return (
                            <div className="single-input" key={currIdx}>
                                <InputWithButton {...param} />
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

RightSideInput.propTypes = {
    items: PropTypes.arrayOf(PropTypes.instanceOf(Immutable.Map)).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemoveButton: PropTypes.func.isRequired,
    onUndo: PropTypes.func.isRequired,
    clearHistory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = ({
    onUndo: ActionCreators.undo,
    clearHistory: ActionCreators.clearHistory
});

RightSideInput = connect(
    mapStateToProps,
    mapDispatchToProps
)(RightSideInput);

export default RightSideInput;