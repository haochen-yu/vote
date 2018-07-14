// Dependancies
import React, { Component } from 'react';

// CSS
import './Login.css';

// Components
import LoginForm from './login-form/LoginForm';
import Navbar from '../../components/navbar/Navbar';

class Login extends Component {
    handleSubmit(values) {
        
    }

    render() {
        return(
            <section className="Login-section">
                <Navbar />
                <LoginForm handleSubmit={ this.handleSubmit } />
            </section>
        );
    }
}

export default Login;