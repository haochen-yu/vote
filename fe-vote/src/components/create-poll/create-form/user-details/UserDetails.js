// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

// CSS
import './UserDetails.css';

class UserDetails extends Component {
    render() {
        const { handleSubmit } = this.props; 

        return(
            <form onSubmit={handleSubmit}>
                <Field name="firstName" type="text" component={Input} label="First Name" />
                <Field name="lastName" type="text" component={Input} label="Last Name" />
                <Field name="organization" type="text" component={Input} label="Organization" optional={true} />
                <div>
                    <button type="submit" className="next">Next</button>
                </div>
            </form>
        );
    }
}

UserDetails = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(UserDetails);

export default UserDetails;