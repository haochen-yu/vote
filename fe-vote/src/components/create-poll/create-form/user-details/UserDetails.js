// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

// Validation
import validation from '../validation/Validation';

// CSS
import './UserDetails.css';

class UserDetails extends Component {
    render() {
        const { handleSubmit } = this.props; 

        return(
            <section className="UserDetails-section">
                <div>
                    <h1 className="title">User Details</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="field-section">
                        <Field label="First Name:" name="firstName" type="text" component={Input} placeholder="Required" autoComplete="first-name" />
                        <Field label="Last Name:" name="lastName" type="text" component={Input} placeholder="Required" autoComplete="family-name" />
                        <Field label="Organization:" name="organization" type="text" component={Input} placeholder="Optional" autoComplete="organization" /> 
                    </div>
                    <div className="wizard-button-wrapper">
                        <button className="vote-btn wizard-right-btn" type="submit">Next</button>
                    </div>
                </form>
            </section>
        );
    }
}

UserDetails = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validation
})(UserDetails);

export default UserDetails;