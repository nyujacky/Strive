import {merge} from 'lodash';
import {RECEIVE_ROUTE, RECEIVE_ROUTES, REMOVE_ROUTE} from '../actions/route_actions';

const initialState = {
  route: null
}

const RouteReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ROUTES:
      return merge({}, action.routes);
    case RECEIVE_ROUTE:
      const route = action.route;
      return {route};
    case REMOVE_ROUTE:
      const newState = state;
      delete newState[action.routeId];
      return newState;
    default:
      return state;
  }
};

export default RouteReducer;
