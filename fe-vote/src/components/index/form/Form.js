// Dependancies
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

// CSS
import './Form.css';

class Form extends Component {
    render() {
        const { handleSubmit } = this.props;

        return(
            <section className="Index-form-section">
                <form onSubmit={ handleSubmit }>
                    <div>
                        <label>Enter your name:</label><br />
                        <Field name="name" component="input" />
                    </div>
                    <div>
                        <label>Enter your message:</label><br />
                        <Field name="message" component="textarea" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}

Form = reduxForm({
    form: 'testForm'
})(Form);

export default Form;