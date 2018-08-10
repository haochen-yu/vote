// Dependancies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// CSS
import './Login.css';

// Components
import LoginForm from './login-form/LoginForm';
import Navbar from '../../components/navbar/Navbar';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        const { actions, history } = this.props;

        // actions.authenticate();
        console.log(values);
        // history.push('/create-poll');
    }

    render() {
        return(
            <section className="Login-section">
                <Navbar />
                <LoginForm onSubmit={ this.handleSubmit } />
            </section>
        );
    }
}

export default withRouter(Login);