import React, {Component} from 'react';
import "./App.css";
import {Header, Main, Footer} from "./components/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as panelActions from "./actions/panelActions";

class App extends Component {

    render() {

        const {panelReducer} = this.props;
        const {buttonClicked} = this.props.panelActions;
        const {showPanel} = panelReducer;

        return (
            <div className="App">
                <Header onButtonClick={buttonClicked}/>
                <Main isPanelOn={showPanel}/>
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
