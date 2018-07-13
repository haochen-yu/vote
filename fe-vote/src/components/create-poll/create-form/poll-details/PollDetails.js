// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

// Validation
import validation from '../validation/Validation';

// CSS
import './PollDetails.css';

class PollDetails extends Component {
    constructor(props) {
        super(props);

        this.pollNameInput = React.createRef();
    }

    componentDidMount() {
        // focus on the first input if there is no value there (used for UI on first load)
        if (this.pollNameInput.current.value === '') {
            this.pollNameInput.current.focus();
        }
    }
    render() {
        const { handleSubmit, previousPage } = this.props; 

        return(
            <section className="PollDetails-section">
                <div>
                    <h1 className="title">Poll Details</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <Field label="Poll Name:" name="pollName" type="text" component={Input} placeholder="Required" inputRef={this.pollNameInput} />
                    <div className="description-label-wrapper">
                        <label>Description:</label>
                    </div>  
                    <Field className="description-textarea" name="pollDescription" type="text" component="textarea" placeholder="Optional" />
                    <div className="wizard-button-wrapper">
                        <button className="vote-btn wizard-left-btn" type="button" onClick={previousPage}>Previous</button>
                        <button className="vote-btn wizard-right-btn" type="submit">Next</button>
                    </div>
                </form>
            </section>
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