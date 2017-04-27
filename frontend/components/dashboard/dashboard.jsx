import React from 'react';
import {Link, hashHistory, withRouter } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
// import DashboardContainer from './dashboard_container';


class Dashboard extends React.Component{

  render(){
    let filler;
    let smallmap;
    if (this.props.location.pathname === "/dashboard"){
      filler = (<div className = "main-content"></div>);
      smallmap = (<img src = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyCYSZguOomYKJj6YrPhOTETA7CwEl22N4g"/>
);
    }else{
      filler = null;
    }
    return(
      <div>
      <div className = "home-page-nav-bar">
        <div className = "home-page-nav-links">
          <Link to="/dashboard" className = "home-page-logo">STRIVE</Link>
          <div className = "home-page-dropdown">
            <div className = "dashboard-container link-container">
              <button onClick ={()=> hashHistory.push("/dashboard")} className = "dashboard-links"> Dashboard </button>
              <div className = "dashboard-link-div button-link-div">
                <button onClick ={()=> hashHistory.push("/routes")} className = "route-link"> My Routes </button>
              </div>
            </div>
            <div className = "workout-container link-container">
              <button onClick ={()=> hashHistory.push("/workouts")} className = "workout-links"> Workouts </button>
              <div className = "workout-link-div button-link-div">
                <button onClick ={()=> hashHistory.push("/workouts")} className = "workout-links"> My Workouts </button>
              </div>
            </div>
            <div className = "explore-container">
              <button className = "explore-links"> Explore </button>
            </div>
          </div>

        </div>
        <div className = "dashboard-logout">
          <GreetingContainer />
        </div>
      </div>

      {filler}
    </div>
    );
  }
}

export default withRouter(Dashboard);






// <Link to= "/routes">Routes</Link>
