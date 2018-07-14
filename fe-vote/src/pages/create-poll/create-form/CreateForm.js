// Dependancies
import React, { Component } from 'react';
import UserDetails from './user-details/UserDetails';
import PollDetails from './poll-details/PollDetails';
import SetCandidates from './set-candidates/SetCandidates';

// CSS
import './CreateForm.css';

class CreateForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
           page: 1
        }

        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }
    
    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { handleSubmit } = this.props;
        const { page } = this.state;

        return(
            <section className="CreateForm-section">
                {page === 1 && <UserDetails onSubmit={ this.nextPage } />}
                {page === 2 && <PollDetails previousPage={ this.previousPage } onSubmit={ this.nextPage } />}
                {page === 3 && <SetCandidates previousPage={ this.previousPage } onSubmit={ handleSubmit } />}
            </section>
        );
    }
}

export default CreateForm;