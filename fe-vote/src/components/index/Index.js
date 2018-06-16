// Dependancies
import React, { Component } from 'react';

// CSS
import './Index.css';

// components
import Form from './form/Form';

class Index extends Component {

    handleSubmit(values) {
        
    }

    render() {
        return(
            <section className="Index-section">
                <h1 className="form-title">Form Test</h1>
                <Form onSubmit={ this.handleSubmit } />
            </section>
        );
    }
}

export default Index;