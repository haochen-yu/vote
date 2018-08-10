// Dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// reducers
import auth from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  auth
});

export default rootReducer;