import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Dashboard from './dashboard/dashboard';
import RouteContainer from './dashboard/routes/route_container';
import RouteIndexContainer from './dashboard/routes/route_index_container';
import WorkoutIndexContainer from './dashboard/workouts/workout_index_container';
import WorkoutContainer from './dashboard/workouts/workout_container';

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
    }
  }

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;

    if (currentUser === null) {
      replace('/');
      //Changed from "/" so that everything returns to dashboard if logged in
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
        <Route path = "/workouts" component = {WorkoutIndexContainer} onEnter = {_redirectIfNotLoggedIn}/>
        <Route path = "/workouts/new" component = {WorkoutContainer} onEnter = {_redirectIfNotLoggedIn}/>
      </Router>
    </Provider>
  );

}
// Need to add /workouts/new here with the right component

export default Root;
