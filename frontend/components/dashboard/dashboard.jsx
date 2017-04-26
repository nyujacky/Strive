import React from 'react';
import {Link, hashHistory} from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
// import DashboardContainer from './dashboard_container';


class Dashboard extends React.Component{

  render(){
    return(
      <div className = "home-page-nav-bar">
        <div className = "home-page-nav-links">
          <Link to="/dashboard" className = "home-page-logo">STRIVE</Link>
          <div className = "home-page-dropdown">
            <div className = "dashboard-container">
              <button onClick ={()=> hashHistory.push("/dashboard")} className = "dashboard-links"> Dashboard </button>
              <div>
                <Link to= "/routes">Routes</Link>
              </div>
            </div>
            <div className = "workout-container">
              <button onClick ={()=> hashHistory.push("/workouts")} className = "workout-links"> Workouts </button>
            
            </div>

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
