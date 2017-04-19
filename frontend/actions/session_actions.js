import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

const receiveErrors = (errors) => {
  return {
      type: RECEIVE_ERRORS,
      errors
  };
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(currentuser => {
    return dispatch(receiveCurrentUser(currentuser))
  } );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
};
