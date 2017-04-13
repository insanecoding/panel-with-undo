import React, {Component} from 'react';
import "./App.css";
import {Header, Main, Footer} from "../components/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as panelActions from "../actions/panelActions";
import * as showActions from "../actions/showActions";

class App extends Component {

    render() {

        const {panelReducer, showReducer} = this.props;
        const {addItem, inputChanged, onRemoveButton} = this.props.panelActions;
        const {buttonClicked} = this.props.showActions;
        const {items} = panelReducer.present.toObject();
        const {showPanel} = showReducer.toObject();

        const param = {
            isPanelOn: showPanel,
            addItem: addItem,
            hidePanel: buttonClicked,
            items: items.toArray(),
            inputChanged: inputChanged,
            onRemoveButton: onRemoveButton,
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
        panelReducer: state.panelReducer,
        showReducer: state.showReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        panelActions: bindActionCreators(panelActions, dispatch),
        showActions: bindActionCreators(showActions, dispatch)
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
