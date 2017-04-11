/**
 * Created by Дмитрий on 11.04.2017.
 */

import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as panelActions from "./../actions/panelActions";

class Header extends Component {

    handleClick = () => {
        this.props.panelActions.buttonClicked();
    };

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Our awesome website</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Glyphicon glyph="menu-hamburger"/>
                            <span onClick={ this.handleClick}> &nbsp; Open menu </span>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
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
)(Header);