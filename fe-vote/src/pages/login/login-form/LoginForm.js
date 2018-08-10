// Dependancies
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// CSS
import './LoginForm.css';

// Components
import Input from '../../../components/input/Input';

class LoginForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        console.log(this.props);

        return(
            <form className="LoginForm-section" onSubmit={ handleSubmit }>
                <div className="email-wrapper">
                    <Field name="email" type="text" component={ Input } placeholder="Email" autoComplete="email" />
                </div>
                <div className="password-wrapper">
                    <Field name="password" type="password" component={ Input } placeholder="Password" autoComplete="password" />
                </div>
                <div className="login-button-wrapper">
                    <button className="vote-btn login-button" type="submit" disabled={ pristine || submitting }>Login</button>
                </div>
            </form>
        );
    }
}

LoginForm = reduxForm({
    form: 'loginForm',
    destroyOnUnmount: true,
})(LoginForm);

export default LoginForm;