import * as WorkoutAPIUtil from '../util/workout_api_util';


export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';


export const receiveWorkout = (workout) => {
  return {
    type: RECEIVE_WORKOUT,
    workout
  }
};
