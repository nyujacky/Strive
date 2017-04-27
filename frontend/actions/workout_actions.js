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
export const receiveWorkouts = (workouts) => {
  return{
    type: RECEIVE_WORKOUTS,
    workouts
  };
};
export const removeWorkout = (workout) => {
  return {
    type: REMOVE_WORKOUT,
    workoutId: workout.id
  }
};

export const requestWorkout = workout => dispatch => {
  return WorkoutAPIUtil.getWorkout(workout).then(workout => dispatch(receiveWorkout(workout)));
};

export const requestWorkouts = workout => dispatch => {
  return WorkoutAPIUtil.getWorkouts(workout).then(workouts => dispatch(receiveWorkouts(workouts)));
};

export const createWorkout = workout => dispatch => {
  return WorkoutAPIUtil.createWorkout(workout).then(workout => dispatch(receiveWorkout(workout)));
};

export const updateWorkout = workout => dispatch => {
  return WorkoutAPIUtil.updateWorkout(workout).then(workout => dispatch(receiveWorkout(workout)));
};

export const deleteWorkout = workout => dispatch => {
  return WorkoutAPIUtil.deleteWorkout(workout).then(workout => dispatch(deleteWorkout(workout)));
};
