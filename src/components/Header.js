import {Navbar, Nav, NavItem, Glyphicon, Button} from 'react-bootstrap';
import React, {PropTypes} from 'react';

const Header = ({onButtonClick}) => {

    const clicked = () => {
        onButtonClick('open');
    };

    return (
        <Navbar inverse collapseOnSelect style={{margin: '0'}}>
            <Navbar.Header>
                <Navbar.Brand>
                    <div style={{fontSize: '30px', color: 'white', lineHeight: '30px'}}>
                        Our awesome website
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem>
                        <Button onClick={clicked}>
                            <Glyphicon glyph='menu-hamburger'/>
                            <span> &nbsp; Open menu </span>
                        </Button>
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