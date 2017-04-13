import React, {Component} from 'react';
import "./App.css";
import {Header, Main, Footer} from "../components/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as panelActions from "../actions/panelActions";

class App extends Component {

    render() {

        const {panelReducer} = this.props;
        const {addItem, inputChanged, onRemoveButton, buttonClicked} = this.props.panelActions;
        const {items, showPanel} = panelReducer.toObject();

        const param = {
            isPanelOn: showPanel,
            addItem: addItem,
            hidePanel: buttonClicked,
            items: items.toArray(),
            inputChanged: inputChanged,
            onRemoveButton: onRemoveButton,
            undo: ""
        };

        return (
            <div className="App">
                <Header onButtonClick={buttonClicked}/>
                <Main {...param}/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        panelReducer: state.panelReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        panelActions: bindActionCreators(panelActions, dispatch)
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
