// Dependancies
import React, { Component } from 'react';
import axios from 'axios';

// CSS
import './CreatePoll.css';

// Components
import CreateForm from './create-form/CreateForm';

class CreatePoll extends Component {

    handleSubmit(values) {
        axios.post('http://localhost:3001/api/createpoll', values);
    }

    render() {
        return(
            <section className="CreatePoll-section">
                <CreateForm handleSubmit={ this.handleSubmit } />
            </section>
        );
    }
}

export default CreatePoll;