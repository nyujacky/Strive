import React from 'react';
import {Link} from 'react-router';
import RouteFormContainer from './route_container';
// import DashboardContainer from './dashboard_container';
import Dashboard from "../dashboard";
import RouteMap from "../../map/routemap";


class RouteForm extends React.Component{

  render(){
    return(
      <div className = "something">
        <div>
          <Dashboard/>

        </div>

        <div className = "map-container">

          <RouteMap/>
        </div>

      </div>

    );
  }
}

export default RouteForm
