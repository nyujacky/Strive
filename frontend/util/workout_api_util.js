export const getWorkouts = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/workouts`
  });
};

export const getWorkout = (workout) => {
  return $.ajax({
    method: 'GET',
    url: `api/workouts/${workout.id}`
  });
};
export const getMyWorkouts = () => {
  return $.ajax({
    method: 'GET',
    url: `api/user_workouts`
  });
};

export const createWorkout = (workout) => {
  return $.ajax({
    method: 'POST',
    url: `api/workouts`,
    data: {workout}
  });
};
export const updateWorkout = (workout) => {
  return $.ajax({
      method: 'PATCH',
      url: `api/workouts/${workout.id}`,
      data: {workout}
  });
};

export const deleteWorkout = workout => {
  return $.ajax({
    method: 'DELETE',
    url: `api/workouts/${workout.id}`
  });
};
