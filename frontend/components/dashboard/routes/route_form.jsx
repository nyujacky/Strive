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
          <div className = "create-map-navbar">
            <div className = "nav-left">
              <div className = "">
                Strive Route Builder
              </div>
            </div>
            <button className = "route-save-button">
              Save
            </button>
          </div>
        </div>

        <div className = "map-container">

          <RouteMap/>
        </div>

      </div>

    );
  }
}

export default RouteForm;
