import React, {Component} from 'react';
import './App.css';
import {Header, Main, Footer, RightSideInput, LeftSideView} from '../components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as panelActions from '../actions/panelActions';

class App extends Component {

    render() {

        const {panelReducer} = this.props;
        const {
            onMenuToggle, addItem, onInputChange,
            onRemoveButton, onRestoreButton
        } = this.props.panelActions;

        const {items, showPanel} = panelReducer.toObject();
        const mainParam = {
            isPanelOn: showPanel,
            addItem: addItem,
            hidePanel: onMenuToggle,
        };

        const rightSideParam = {
            items: items.toArray(),
            onChange: (e) => onInputChange(e.target.name, e.target.value),
            onRemoveButton: onRemoveButton,
            onRestoreButton: onRestoreButton
        };

        return (
            <div className='App'>
                <Header onButtonClick={onMenuToggle}/>
                <Main {...mainParam}>
                    <LeftSideView items={items.toArray()}/>
                    <RightSideInput {...rightSideParam} />
                </Main>
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
