export const getWorkouts = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/workouts`
  });
};

export const getWorkout = (workout) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${workout.user_id}/workouts/${workout.id}`
  });
};

export const createWorkout = (workout) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${workout.user_id}/workouts`,
    data: {workout}
  });
};
export const updateWorkout = (workout) => {
  return $.ajax({
      method: 'PATCH',
      url: `api/users/${workout.user_id}/workouts/${workout.id}`,
      data: {workout}
  });
};

export const deleteWorkout = workout => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${workout.user_id}/workouts/${workout.id}`
  });
};
