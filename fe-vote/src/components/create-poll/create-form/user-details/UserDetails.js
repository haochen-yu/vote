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
            <form className="UserDetails-section" onSubmit={handleSubmit}>
                <Field label="First Name:" name="firstName" type="text" component={Input} placeholder="First Name" autoComplete="first-name" />
                <Field label="Last Name:" name="lastName" type="text" component={Input} placeholder="Last Name" autoComplete="family-name" />
                <Field label="Organization (Optional):" name="organization" type="text" component={Input} placeholder="Organization" autoComplete="organization" />
                <div className="button-wrapper">
                    <button className="vote-btn right-btn" type="submit">Next</button>
                </div>
            </form>
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