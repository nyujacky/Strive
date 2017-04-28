import * as RouteAPIUtil from '../util/route_api_util';

// export const RECEIVE_NEW_ROUTE = 'RECEIVE_NEW_ROUTE';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

//POJO Action creators

export const receiveRoute = (route) => {
  return {
    type: RECEIVE_ROUTE,
    route
  }
};
export const receiveRoutes = (routes) => {
  return{
    type: RECEIVE_ROUTES,
    routes
  }
};

export const removeRoute = (route) => {
  return{
    type: REMOVE_ROUTE,
    routeId: route.id
  }
};

//function action creators

export const requestRoute = route => dispatch => {
  return RouteAPIUtil.getRoute(route).then(route => dispatch(receiveRoute(route)));
};
//Chaned from route to userId
export const requestRoutes = userId => dispatch => {
  return RouteAPIUtil.getRoutes(userId).then(routes => dispatch(receiveRoutes(routes)));
};
export const requestMyRoutes = () => dispatch => {
  return RouteAPIUtil.getMyRoutes().then(routes => dispatch(receiveRoutes(routes)));
};

export const createRoute = route => dispatch => {
  return RouteAPIUtil.createRoute(route).then(route => dispatch(receiveRoute(route)));
};

export const updateRoute = route => dispatch => {
  return RouteAPIUtil.updateRoute(route).then(route => dispatch(receiveRoute(route)));
};

export const deleteRoute = route => dispatch => {
  return RouteAPIUtil.deleteRoute(route).then(route => dispatch(removeRoute(route)));
};
