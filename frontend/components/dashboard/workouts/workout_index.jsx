import React from 'react';
import {Link} from 'react-router';
import GreetingContainer from '../../greeting/greeting_container';
import Dashboard from '../dashboard';

// import DashboardContainer from './dashboard_container';

class WorkoutIndex extends React.Component{
  componentWillMount(){
    //
    // this.props.requestWorkouts(this.props.currentUser.id);
    this.props.requestMyWorkouts();
    this.props.requestMyRoutes();

  }
  componentWillUpdate(newProps){
    if(newProps.workouts.length != this.props.workouts.length){
      this.props.requestMyWorkouts();
    }
  }
  translateDate(date){
    const finalDate = new Date(date);
    return `${finalDate.toDateString()} at ${finalDate.toLocaleTimeString()}`;
  }
  // getWorkoutTotal(){
  //   this.props.requestRoutes();
  // }
  render(){
    let displayWorkouts;
    //
    // debugger
    if (this.props.workouts.workout === null) {
      //
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
            <li>{workout.title}</li>
            <li>{workout.description}</li>
            <li>{workout.route.title}</li>
            <li className = "workout-date">{this.translateDate(workout.created)}</li>

            <li>{}</li>
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


        </div>

      </div>
    );
  }
}

export default WorkoutIndex;
