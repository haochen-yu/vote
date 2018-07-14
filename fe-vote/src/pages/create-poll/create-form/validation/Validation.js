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
    
    return errors;
};

export default validation;