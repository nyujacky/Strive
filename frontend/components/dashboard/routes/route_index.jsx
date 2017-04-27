import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';

// import DashboardContainer from './dashboard_container';

class RouteIndex extends React.Component{
  componentWillMount(){
    // debugger
    this.props.requestRoutes(this.props.currentUser.id);
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

        displayRoutes = (
        <ul className = "route-index-list">
          {Object.values(this.props.routes).map(route => <div key = {route.id}>
            <li>{route.id}</li>
            <li>{route.description}</li>
            <li>{route.duration}</li>
            <li>{route.distance}</li>
            <li>{route.elevation}</li>
            <li>Hello</li>
          </div>
        )
          }
        </ul>);
    }


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
