
export const getRoutes = (route) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${route.user_id}/routes`
  });
};
export const getRoute = (route) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${route.user_id}/routes/${route.id}`
  });
};

export const createRoute = (route) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${route.user_id}/routes`,
    data: {route}
  });
};

export const updateRoute = (route) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${route.user_id}/routes/${route.id}`,
    data : {route}
  });
};

export const deleteRoute = route => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${route.user_id}/routes/${route.id}` });
};
