import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';

// import DashboardContainer from './dashboard_container';

class WorkoutIndex extends React.Component{

  render(){
    return(
      <div className = "workout-index">
        <div>

          <Dashboard />
        </div>
        <div className = "workout-index-navbar">
            <div className = "workout-index-header">

              My Workouts
              <Link to ="/workout/new"> New Workout </Link>
            </div>
            <div className = "workout-totals">
              <div className = "workout-total-header">
                Workout Totals
              </div>
              <div className = "workout-total-container">

              </div>
            </div>

        </div>

      </div>
    );
  }
}

export default WorkoutIndex;
