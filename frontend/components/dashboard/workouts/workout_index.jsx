import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';

// import DashboardContainer from './dashboard_container';

class WorkoutIndex extends React.Component{
  componentWillMount(){
    // debugger
    this.props.requestWorkouts(this.props.currentUser.id);
  }
  componentWillUpdate(newProps){
    // debugger
  }
  // getWorkoutTotal(){
  //   this.props.requestRoutes();
  // }
  render(){
    let displayWorkouts;
    // debugger
    if (this.props.workouts.workout === null) {
      // debugger
      // displayWorkouts = (<div id="spinner"></div>);
      displayWorkouts = (<div className="loader">
                      <div className="circle one"></div>
                      <div className="circle two"></div>
                      <div className="circle three"></div>
                      </div>
                    );
    }
    else{

        displayWorkouts = (
        <ul className = "workout-index-list">
          {Object.values(this.props.workouts).map(workout => <div className = "workout-item" key = {workout.id}>
            <li>{workout.id}</li>
            <li>Hello</li>
          </div>
        )
          }
        </ul>);
    }

    return(
      <div className = "workout-index">
        <div>

          <Dashboard />
        </div>
        <div className = "workout-index-navbar">
          <div className = "workout-index-container">
            <div className = "workout-index-header">

              My Workouts
              <Link to ="/workouts/new"> New Workout </Link>
            </div>
            {displayWorkouts}
          </div>
            <div className = "workout-totals">
              <div className = "workout-total-header">
                Workout Totals
              </div>
              <div className = "workout-total-container">
                <label>Total Distance: </label>
                <div></div>
              </div>
            </div>

        </div>

      </div>
    );
  }
}

export default WorkoutIndex;
