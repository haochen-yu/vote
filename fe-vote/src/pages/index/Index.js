// Dependancies
import React, { Component } from 'react';

// CSS
import './Index.css';

// components
import Navbar from '../../components/navbar/Navbar';
import Landing from './landing/Landing';

class Index extends Component {
    render() {
        return(
            <section className="Index-section">
                <Navbar />
                <Landing />
            </section>
        );
    }
}

export default Index;