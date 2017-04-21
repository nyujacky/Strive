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
          <div className = "dashboard-links"> Dashboard </div>
          <div className = "workout-links"> Workouts </div>
          <div className = "explore-links"> Explore </div>
        </div>
        <div className = "dashboard-logout">
          <GreetingContainer />
        </div>

      </div>
    );
  }
}

export default Dashboard;
