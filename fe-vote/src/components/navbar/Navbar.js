// Dependancies
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// CSS
import './Navbar.css';

class NavbarComponent extends Component {
    render() {
        return(
            <Navbar className="Navbar-section">
                <Navbar.Header>
                    <Navbar.Brand>
                        Navbar Placeholder
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="/login">
                            Login
                        </NavItem>
                        <NavItem>
                            Signup
                        </NavItem>
                    </Nav>
                </Navbar.Collapse> 
            </Navbar>
        );
    }
}

export default NavbarComponent;