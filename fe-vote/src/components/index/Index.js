// Dependancies
import React, { Component } from 'react';

// CSS
import './Index.css';

// components
import CreatePoll from '../create-poll/CreatePoll';

class Index extends Component {
    render() {
        return(
            <section className="Index-section">
                <CreatePoll />
            </section>
        );
    }
}

export default Index;