import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import routeReducer from './route_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  route: routeReducer
});

export default rootReducer;
