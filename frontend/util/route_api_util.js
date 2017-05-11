
export const getRoutes = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/routes`
  });
};
export const getMyRoutes = () => {
  return $.ajax({
    method: 'GET',
    url: `api/user_routes`
  });
};
export const getRoute = (route) => {
  return $.ajax({
    method: 'GET',
    url: `api/routes/${route.id}`
  });
};

export const createRoute = (route) => {

  return $.ajax({
    method: 'POST',
    url: `api/routes`,
    data: {route}
  });
};

export const updateRoute = (route) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/routes/${route.id}`,
    data : {route}
  });
};

export const deleteRoute = route => {
  return $.ajax({
    method: 'DELETE',
    url: `api/routes/${route.id}` });
};
