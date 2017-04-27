import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import routeReducer from './route_reducer';
import workoutReducer from './workout_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  route: routeReducer,
  workout: workoutReducer
});

export default rootReducer;
