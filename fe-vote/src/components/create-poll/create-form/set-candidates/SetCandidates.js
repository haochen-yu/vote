// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm, change, untouch, unregisterField } from 'redux-form';
import Input from '../input/Input';

// Validation
import validation from '../validation/Validation';

// CSS
import './SetCandidates.css';

// Maximum number of candidates
const MAX_NUM_OF_CANDIDATES = 10;

class SetCandidates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfCandidates: 0
        };
        
        // set initial amount of candidates
        this.props.dispatch(change('createPollForm', 'numOfCandidates', this.state.numOfCandidates));

        this.addCandidate = this.addCandidate.bind(this);
        this.removeCandidate = this.removeCandidate.bind(this);
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        const { numOfCandidates } = this.state;

        for (let i = 0; i < numOfCandidates; i++) {
            dispatch(change('createPollForm', 'candidate-' + (i), null));
            dispatch(untouch('createPollForm', 'candidate-' + (i)));
            unregisterField('createPollForm', 'candidate-' + (i));
        }
    }

    // increments the number of candidates by 1
    addCandidate() {
        const { dispatch } = this.props;
        const { numOfCandidates } = this.state;

        if (numOfCandidates < MAX_NUM_OF_CANDIDATES) {
            this.setState({
                numOfCandidates: numOfCandidates + 1
            });
            // update number of candidates
            dispatch(change('createPollForm', 'numOfCandidates', numOfCandidates + 1));
            // ensures new fields are untouched for error
            dispatch(untouch('createPollForm', 'candidate-' + numOfCandidates));
        }
    }

    // decrements the number of candiates by 1
    removeCandidate() {
        const { dispatch } = this.props;
        const { numOfCandidates } = this.state;

        if (numOfCandidates > 0) {
            // remove candidate from redux form
            dispatch(change('createPollForm', 'candidate-' + (numOfCandidates - 1), null));
            dispatch(untouch('createPollForm', 'candidate-' + (numOfCandidates - 1)));
            unregisterField('createPollForm', 'candidate-' + (numOfCandidates - 1));
            
            this.setState({
                numOfCandidates: numOfCandidates - 1
            });

            // update number of candidates
            dispatch(change('createPollForm', 'numOfCandidates', numOfCandidates - 1));
        }   
    }

    render() {
        const { handleSubmit, previousPage, pristine, submitting } = this.props;
        const { numOfCandidates } = this.state;
        
        let candidateArray = [];

        // creates the candidate inputs depending on the number set
        for (let i = 0; i < numOfCandidates; i++) {
            candidateArray.push(
                <div key={i}>
                    <Field name={"candidate-" + i} component={Input} placeholder="Candidate Name" />
                </div>
            );
        }

        return(
            <form className="SetCandidates-section" onSubmit={handleSubmit}>
                <div className="candidate-button-wrapper">
                    <button className="vote-btn left-btn" type="button" onClick={this.addCandidate} disabled={numOfCandidates >= MAX_NUM_OF_CANDIDATES}>Add Candidate</button>
                    <button className="vote-btn right-btn" type="button" onClick={this.removeCandidate} disabled={numOfCandidates < 1}>Remove Candidate</button>
                </div>
                {candidateArray}
                <div>
                    <button className="vote-btn left-btn" type="button" onClick={previousPage}>Previous</button>
                    <button className="vote-btn right-btn" type="submit" disabled={numOfCandidates < 1 || (pristine || submitting)}>Submit</button>
                </div>
            </form>
        );
    }
}

SetCandidates = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validation
})(SetCandidates);

export default SetCandidates;