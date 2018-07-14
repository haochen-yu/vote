// Dependancies
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, formValueSelector, arrayPush, arrayRemove } from 'redux-form';

// Validation
import validation from '../validation/Validation';

// CSS
import './SetCandidates.css';

// Maximum number of candidates
const MAX_NUM_OF_CANDIDATES = 100;

let scrollToBottom = false;

// redux form selector to set initial number of candidates
const selector = formValueSelector('createPollForm');

class SetCandidates extends Component {
    constructor(props) {
        super(props);
        const { numOfCandidates } = props;

        this.state = {
            numOfCandidates,
            candidateName: ''
        };

        this.addCandidateInput = React.createRef();
        this.addCandidate = this.addCandidate.bind(this);
        this.removeCandidate = this.removeCandidate.bind(this);
        this.candidateInputChange = this.candidateInputChange.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidMount() {
        // focus on add candidate input for UI
        this.addCandidateInput.current.focus();
    }

    componentDidUpdate() {
        // whenever new candidate is added, scroll to bottom
        if (scrollToBottom) {
            this.scrollToBottom();
            scrollToBottom = false;
        }
    }

    // scrolls to bottom of candidate list
    scrollToBottom() {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    }

    // increments the number of candidates by 1
    addCandidate(event) {
        const { dispatch } = this.props;
        const { numOfCandidates } = this.state;

        event.preventDefault();

        if (numOfCandidates < MAX_NUM_OF_CANDIDATES && this.state.candidateName !== '') {
            // update number of candidates
            dispatch(change('createPollForm', 'numOfCandidates', numOfCandidates + 1));
            // add new candidate to redux
            dispatch(arrayPush('createPollForm', 'candidates', this.state.candidateName));
            this.setState({
                numOfCandidates: numOfCandidates + 1,
                candidateName: ''
            });

            // let component know to scroll to bottom
            scrollToBottom = true;
        }
    }

    // decrements the number of candiates by 1
    removeCandidate(index) {
        const { dispatch } = this.props;
        const { numOfCandidates } = this.state;

        // remove candidate from redux form
        dispatch(arrayRemove('createPollForm', 'candidates', index));
        
        this.setState({
            numOfCandidates: numOfCandidates - 1
        });

        // update number of candidates
        dispatch(change('createPollForm', 'numOfCandidates', numOfCandidates - 1));
    }

    // handles the user input on the add candidate input
    candidateInputChange(event) {
        this.setState({
            candidateName: event.target.value
        });
    }

    render() {
        const { handleSubmit, previousPage, pristine, submitting, candidateArray } = this.props;
        const { numOfCandidates } = this.state;

        let displayList = [];

        // creates the candidate list depending on the number of candidates
        for (let i = 0; i < numOfCandidates; i++) {
            displayList.push(
                <li className="candidate-list-item" key={ i }>
                    <span className="candidate-name">{i + 1}. {candidateArray[i]}</span><button className="remove-candidate-button" type="button" onClick={ () => this.removeCandidate(i) }>X</button>
                </li>
            );
        }

        return(
            <section className="SetCandidates-section">
                <div>
                    <h1 className="title">Set Candidates</h1>
                </div>
                <div className="candidate-input-wrapper">
                    <form onSubmit={this.addCandidate }>
                        <input className="candidate-input" value={ this.state.candidateName } onChange={ this.candidateInputChange } type="text" placeholder="Candidate Name" ref={this.addCandidateInput} />
                        <button className="vote-btn add-candidate-button" type="submit" disabled={this.state.candidateName === '' || numOfCandidates >= MAX_NUM_OF_CANDIDATES}>Add</button>
                    </form>
                </div>
                <form onSubmit={handleSubmit}>
                    <ul className="candidate-list">
                        {displayList}
                        <li className="list-end" ref={(el) => this.messagesEnd = el} />
                    </ul>
                    <div className="wizard-button-wrapper">
                        <button className="vote-btn wizard-left-btn" type="button" onClick={previousPage}>Previous</button>
                        <button className="vote-btn wizard-right-btn" type="submit" disabled={numOfCandidates < 1 || (pristine || submitting)}>Submit</button>
                    </div>
                </form>
            </section>
        );
    }
}

SetCandidates = reduxForm({
    form: 'createPollForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: validation
})(SetCandidates);

SetCandidates = connect(state => {
    const numOfCandidates = selector(state, 'numOfCandidates');
    const candidateArray = selector(state, 'candidates');
    return {
        numOfCandidates: numOfCandidates || 0,
        candidateArray: candidateArray || {}
    }
})(SetCandidates);

export default SetCandidates;