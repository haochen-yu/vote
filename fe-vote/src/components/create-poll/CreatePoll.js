// Dependancies
import React, { Component } from 'react';
import axios from 'axios';

// CSS
import './CreatePoll.css';

// Components
import CreateForm from './create-form/CreateForm';

class CreatePoll extends Component {

    handleSubmit(values) {
        axios.get('http://localhost:3001/recievemessage');
    }

    render() {
        return(
            <section className="Index-section">
                <CreateForm onSubmit={ this.handleSubmit } />
            </section>
        );
    }
}

export default CreatePoll;