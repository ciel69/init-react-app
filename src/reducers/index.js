import { combineReducers } from 'redux';
import reduce from './reduce';
import { reducer as form } from 'redux-form';

const reducers = {
  reduce,
  form, // the state and validation of form fields
};

export default combineReducers(reducers);
