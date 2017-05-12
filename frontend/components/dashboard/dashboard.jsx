import React from 'react';
import {Link, hashHistory, withRouter } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
// import DashboardContainer from './dashboard_container';
import ActivityFeedContainer from './activityfeed_container';

class Dashboard extends React.Component{

  render(){
    let filler;
    let smallmap;
    let header;
    if (this.props.location.pathname === "/dashboard"){
      filler = (
        <div className = "main-content">

          <ActivityFeedContainer />
        </div>);
      header = (<div className = "activity-feed">Activity Feed</div>)
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
          </div>

        </div>
        <div className = "dashboard-logout">
          <GreetingContainer />
        </div>
      </div>
      {header}
      {filler}
    </div>
    );
  }
}

export default withRouter(Dashboard);






// <Link to= "/routes">Routes</Link>


// <div className = "explore-container">
//   <button className = "explore-links"> Explore </button>
// </div>
