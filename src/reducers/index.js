import { combineReducers } from 'redux';
import user from './user';
import formNewUser from './formNewUser';
import partHistory from './partHistory';
import formCode from './formCode';
import { reducer as form } from 'redux-form';

const reducers = {
  user,
  form, // the state and validation of form fields
  formNewUser,
  formCode,
  partHistory,
};

export default combineReducers(reducers);
