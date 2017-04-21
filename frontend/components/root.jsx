import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
// import DashboardContainer from './dashboard/dashboard_container';
// import RouteIndexContainer from './dashboard/routes/route_index_container';
// import RouteNewContainer from './dashboard/routes/route_new_form_container';
// import RouteEditContainer from './dashboard/routes/route_edit_form_container';
// import RouteShowContainer from './dashboard/routes/route_show_container';

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

      </Router>
    </Provider>
  );

}

export default Root;
