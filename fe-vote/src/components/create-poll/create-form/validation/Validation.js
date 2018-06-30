const validation = values => {
    const errors = {};

    // first name is required
    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    // last name is required
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    // poll name is required
    if (!values.pollName) {
        errors.pollName = 'Required';
    }

    // set required for number of candidate fields
    for (let i = 0; i < values.numOfCandidates; i++) {
        if (!values['candidate-' + i]) {
            errors['candidate-' + i] = 'Required';
        }
    }
    
    return errors;
};

export default validation;