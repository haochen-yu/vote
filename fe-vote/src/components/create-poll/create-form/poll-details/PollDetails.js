// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

// Validation
import validation from '../validation/Validation';

// CSS
import './PollDetails.css';

class PollDetails extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props; 

        return(
            <form className="PollDetails-section" onSubmit={handleSubmit}>
                <Field label="Poll Name" name="pollName" type="text" component={Input} placeholder="Poll Name" />
                <div className="description-label-wrapper">
                    <label>Description (Optional)</label>
                </div>  
                <Field className="description-textarea" name="pollDescription" type="text" component="textarea"/>
                <div className="button-wrapper">
                    <button className="vote-btn left-btn" type="button" onClick={previousPage}>Previous</button>
                    <button className="vote-btn right-btn" type="submit">Next</button>
                </div>
            </form>
        );
    }
}

PollDetails = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validation
})(PollDetails);

export default PollDetails;