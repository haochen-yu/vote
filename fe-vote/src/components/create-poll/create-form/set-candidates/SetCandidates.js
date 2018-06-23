// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

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

        this.addCandidate = this.addCandidate.bind(this);
        this.removeCandidate = this.removeCandidate.bind(this);
    }

    // increments the number of candidates by 1
    addCandidate() {
        if (this.state.numOfCandidates < MAX_NUM_OF_CANDIDATES) {
            this.setState({
                numOfCandidates: this.state.numOfCandidates + 1
            });
        }
    }

    // decrements the number of candiates by 1
    removeCandidate() {
        if (this.state.numOfCandidates > 0) {
            this.setState({
                numOfCandidates: this.state.numOfCandidates - 1
            });
        }   
    }

    render() {
        const { onSubmit, previousPage, pristine, submitting } = this.props;
        const { numOfCandidates } = this.state;
        let candidateArray = [];

        // creates the candidate inputs depending on the number set
        for (let i = 0; i < numOfCandidates; i++) {
            candidateArray.push(
                <div key={i}>
                    <Field name={"Candidate-" + i} component={Input} label={"Candidate Name"} />
                </div>
            );
        }

        return(
            <form onSubmit={onSubmit}>
                <button type="button" onClick={this.addCandidate} disabled={numOfCandidates >= MAX_NUM_OF_CANDIDATES}>Add Candidate</button><br />
                <button type="button" onClick={this.removeCandidate} disabled={numOfCandidates < 1}>Remove Candidate</button><br />
                {candidateArray}
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" className="next" disabled={numOfCandidates < 1 || (pristine || submitting)}>Submit</button>
                </div>
            </form>
        );
    }
}

SetCandidates = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(SetCandidates);

export default SetCandidates;