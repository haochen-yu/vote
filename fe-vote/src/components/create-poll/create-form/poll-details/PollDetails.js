// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

// CSS
import './PollDetails.css';

class PollDetails extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props; 

        return(
            <form onSubmit={handleSubmit}>
                <Field name="pollName" type="text" component={Input} label="First Name" />
                <label>Description</label>
                <Field name="pollDescription" type="text" component="textarea"/>
                <span>Optional</span>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" className="next">Next</button>
                </div>
            </form>
        );
    }
}

PollDetails = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(PollDetails);

export default PollDetails;