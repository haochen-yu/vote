// Dependancies
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

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
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default NavbarComponent;