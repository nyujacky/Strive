import merge from 'lodash/merge';
import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: []
}

const sessionReducer = (state = initialState, action) => {

  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, initialState, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;

      return Object.assign({},initialState, {errors});
      default:
        return state;
  }
};

export default sessionReducer;
