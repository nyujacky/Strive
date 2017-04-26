import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Dashboard from './dashboard/dashboard';
import RouteForm from './dashboard/routes/route_form';
import RouteIndex from './dashboard/routes/route_index';
import RouteContainer from './dashboard/routes/route_container';
import WorkoutIndex from './dashboard/workouts/workout_index';
import RouteIndexContainer from './dashboard/routes/route_index_container';
// import RouteContainer from './dashboard/routes/route_container';
// import RouteShowContainer from './dashboard/routes/route_show_container';
// import Dashboard from './dashboard/dashboard';

const Root = ({store}) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  //Redirects to homepage so that people can't use URL to go back to signup/login
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
      //Changed from "/" so that everything returns to dashboard if logged in
      //Change to "/" for testing so that you can log out
    }
  }

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
      //Changed from "/" so that everything returns to dashboard if logged in
      //Change to "/" for testing so that you can log out
    }
  }

  return (
    <Provider store = { store} >
      <Router history = {hashHistory}>
        <Route path = "/" component = {App} onEnter = {_redirectIfLoggedIn}>
        </Route>
        <Route path = "/login" component = {SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
        <Route path = "/signup" component = {SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
        <Route path = "/dashboard" component = {Dashboard}  onEnter = {_redirectIfNotLoggedIn}/>
        <Route path = "/routes" component = {RouteIndexContainer} onEnter = {_redirectIfNotLoggedIn}>
        </Route>
        <Route path = "/routes/new" component = {RouteContainer} onEnter = {_redirectIfNotLoggedIn}/>
        <Route path = "/workouts" component = {WorkoutIndex} onEnter = {_redirectIfNotLoggedIn}/>


      </Router>
    </Provider>
  );

}

// <Route path = "/dashboard" component = {Dashboard}>
//   <Route path = "/dashboard/routes" component = {RouteIndexContainer}>
//     <Route path = "dashboard/routes/new" component = {RouteContainer}/>
//     <Route path = "/dashboard/routes/:routeId" component = {RouteShowContainer}/>
//     <Route path = "/dashboard/routes/:routeId/edit" component = {RouteContainer}/>
//   </Route>
// </Route>
export default Root;
