import {merge} from 'lodash';
import {RECEIVE_WORKOUT, RECEIVE_WORKOUTS, REMOVE_WORKOUT} from '../actions/workout_actions';


const initialState = {
  workout: null
}

const WorkoutReducer = (state = initialState, action)=> {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_WORKOUTS:
      return merge({}, action.workouts);
    case RECEIVE_WORKOUT:
      const workout = action.workout;
      const newState1 = merge({}, state);
      merge(newState1.workouts,action.workout);
      return newState1;
    case REMOVE_WORKOUT:
      const newState = state;
      delete newState[action.workoutId];
      return newState;
    default:
      return state;
  }
};

export default WorkoutReducer
