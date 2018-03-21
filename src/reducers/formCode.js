import * as form from 'src/constants/formCode';

const initialState = {
  show: false,
  fetching: false,
  error: false,
  requestMessage: [],
};

export default function formCode(state = initialState, action) {
  switch (action.type) {
    case form.FORM_CODE_SHOW:
      return { ...state, show: true };
    case form.FORM_CODE_HIDE:
      return { ...state, show: false };
    case form.FORM_CODE_TOGGLE:
      return { ...state, show: !state.show };
    case form.REGISTER_CODE_REQUEST:
      return { ...state, fetching: true };
    case form.REGISTER_CODE_SUCCESS:
      return { ...state, fetching: false, requestMessage: action };
    case form.REGISTER_CODE_FAILURE:
      return { ...state, fetching: false, requestMessage: action, error: true };
    default:
      return state;
  }
}
