import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';


class RouteIndex extends React.Component{
  componentWillMount(){
    //
    this.props.requestMyRoutes();

  }
  renderMap(route){
    let smallMap;
    //
    if(route.routepolystring){
        smallMap = (<img src = {`https://maps.googleapis.com/maps/api/staticmap?size=100x100&scale=2&zoom=11&path=weight:3%7Ccolor:green%7Cenc:${route.routepolystring}&key=AIzaSyCYSZguOomYKJj6YrPhOTETA7CwEl22N4g`}></img>);
      }
      else{
        smallMap = null;
      }
      return smallMap;
    }
  render(){
    //
    let displayRoutes;
    if (this.props.routes.route === null) {
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
          {Object.values(this.props.routes).map(route =>
            <div className = "route-item" key = {route.id}>
              <li>{this.renderMap(route)}</li>
              <li className = "route-item-title">{route.title}</li>
              <li>{route.description}</li>
              <div className = "route-item-distance">
                <li className = "route-distance-value">
                  <strong>{route.distance}</strong>
                  <label className = "mi"> mi </label>
                </li>
                <label className = "distance-label">
                  Distance
                </label>
              </div>
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
        <div className = "route-index-container">
          <div className = "route-index-header">

              My Routes


              <Link to ="/routes/new"> New Route </Link>
          </div>
        </div>

          {displayRoutes}
      </div>
    );
  }
}

export default RouteIndex;
