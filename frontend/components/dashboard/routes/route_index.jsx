import React from 'react';
import {Link} from 'react-router';
import RouteIndexContainer from './route_index_container';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';

// import DashboardContainer from './dashboard_container';

class RouteIndex extends React.Component{

  render(){
    return(
      <div className = "route-index-page">
        <div>

          <Dashboard />
        </div>
        <div className = "route-index-header">
          
            My Routes

            <Link to ="/routes/new"> New Route </Link>

        </div>

      </div>
    );
  }
}

export default RouteIndex;
