import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import RouteIndexContainer from './dashboard/route_index_container';

const Root = ({store}) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store = { store} >
      <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
        </Route>
        <Route path = "/login" component = {SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
        <Route path = "/signup" component = {SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
        <Route path = "/dashboard" component = {DashboardContainer}>
          <Route path = "/dashboard/routes" component = {RouteIndexContainer}>
            <Route path = "dashboard/routes/new" component = {RouteNewContainer}/>
            <Route path = "/dashboard/routes/:routeId" component = {RouteShowContainer}/>
            <Route path = "/dashboard/routes/:routeId/edit" component = {RouteEditContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );

}

export default Root;
