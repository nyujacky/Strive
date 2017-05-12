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
    debugger
      const route = action.route;
      const newState1 = merge({}, state);
      merge(newState1.routes,action.route);
      return newState1;
    case REMOVE_ROUTE:
      const newState = state;
      delete newState[action.routeId];
      return newState;
    default:
      return state;
  }
};

export default RouteReducer;
