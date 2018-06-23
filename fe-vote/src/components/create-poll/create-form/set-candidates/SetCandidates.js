// Dependancies
import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../input/Input';

const MAX_NUM_OF_CONTESTANTS = 10;

class SetCandidates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfContestants: 0
        };

        this.addContestant = this.addContestant.bind(this);
        this.removeContestant = this.removeContestant.bind(this);
    }

    addContestant() {
        if (this.state.numOfContestants < 10) {
            this.setState({
                numOfContestants: this.state.numOfContestants + 1
            });
        }
    }

    removeContestant() {
        if (this.state.numOfContestants > 0) {
            this.setState({
                numOfContestants: this.state.numOfContestants - 1
            });
        }   
    }

    render() {
        const { onSubmit, previousPage, pristine, submitting } = this.props;
        const { numOfContestants } = this.state;
        let contestantArray = [];

        for (let i = 0; i < numOfContestants; i++) {
            contestantArray.push(
                <div key={i}>
                    <Field name={"contestant-" + i} component={Input} label={"Contestant Name"} />
                </div>
            );
        }

        return(
            <form onSubmit={onSubmit}>
                <button type="button" onClick={this.addContestant} disabled={numOfContestants >= MAX_NUM_OF_CONTESTANTS}>Add Contestant</button><br />
                <button type="button" onClick={this.removeContestant} disabled={numOfContestants < 1}>Remove Contestant</button><br />
                {contestantArray}
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" className="next" disabled={numOfContestants < 1 || (pristine || submitting)}>Submit</button>
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