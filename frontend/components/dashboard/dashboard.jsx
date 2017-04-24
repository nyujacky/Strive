import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
// import DashboardContainer from './dashboard_container';


class Dashboard extends React.Component{

  render(){
    return(
      <div className = "home-page-nav-bar">
        <div className = "home-page-nav-links">
          <Link to="/dashboard" className = "home-page-logo">STRIVE</Link>
          <div className = "home-page-dropdown">
            <button className = "dashboard-links"> Dashboard </button>
            <div>
              <Link to= "/routes" > Route Index</Link>
            </div>
            <button className = "workout-links"> Workouts </button>
            <button className = "explore-links"> Explore </button>
          </div>

        </div>
        <div className = "dashboard-logout">
          <GreetingContainer />
        </div>

      </div>
    );
  }
}

export default Dashboard;
