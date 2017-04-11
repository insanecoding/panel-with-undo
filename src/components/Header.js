import {Navbar, Nav, NavItem, Glyphicon} from "react-bootstrap";
import React, {PropTypes} from 'react';

const Header = ({onButtonClick}) => {

    const clicked = () => {
        console.log("click");
        onButtonClick();
    };

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
                    <NavItem>
                        <Glyphicon glyph="menu-hamburger"/>
                        <span onClick={clicked}> &nbsp; Open menu </span>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

Header.propTypes = {
    onButtonClick: PropTypes.func.isRequired
};

export default Header;