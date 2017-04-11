/**
 * Created by Дмитрий on 11.04.2017.
 */

import { Navbar, Nav, NavItem, Glyphicon } from "react-bootstrap";
import React from "react";

const Header = () => {
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
                        <Glyphicon glyph="menu-hamburger" />
                        <span> &nbsp; Open menu </span>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;