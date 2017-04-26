import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';

// import DashboardContainer from './dashboard_container';

class RouteIndex extends React.Component{
  componentWillMount(){
    // debugger
    this.props.requestRoutes(currentUser.id);
  }


  render(){
    // debugger
    // var Spinner = require('react-spinkit');
    let displayRoutes;
    if (this.props.routes.route === null) {
      // displayRoutes = (<div id="spinner"></div>);
      displayRoutes = (<div className="loader">
                      <div className="circle one"></div>
                      <div className="circle two"></div>
                      <div className="circle three"></div>
                      </div>
);
    }
    else{
      // debugger
        displayRoutes = (
        <ul className = "route-index-list">
          {Object.values(this.props.routes).map(route => <li key = {route.id}>{route.id }</li>)}
        </ul>);
    }


    // if (this.props.routes.route === null){
    //   return <div>Loading</div>
    // }else{
    //
    // }
    // debugger
    return(
      <div className = "route-index-page">
        <div>

          <Dashboard />
        </div>
        <div className = "route-index-header">

            My Routes


            <Link to ="/routes/new"> New Route </Link>
        </div>
          {displayRoutes}
      </div>
    );
  }
}

export default RouteIndex;
