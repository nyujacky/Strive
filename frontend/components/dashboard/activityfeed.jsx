import React from 'react';
import {Link, hashHistory} from 'react-router';


class ActivityFeed extends React.Component{
  componentWillMount(){
    this.props.requestMyRoutes();
    this.props.requestMyWorkouts();
    // debugger
  }


  renderMap(route){
    let smallMap;
    //
    if(route){

      if(route.routepolystring){
          smallMap = (<img src = {`https://maps.googleapis.com/maps/api/staticmap?size=50x50&scale=2&zoom=10&path=weight:3%7Ccolor:green%7Cenc:${route.routepolystring}&key=AIzaSyCYSZguOomYKJj6YrPhOTETA7CwEl22N4g`}></img>);
        }
        else{
          // smallMap = (<img src = {`https://maps.googleapis.com/maps/api/staticmap?size=50x50&scale=2&zoom=0&key=AIzaSyCYSZguOomYKJj6YrPhOTETA7CwEl22N4g`}></img>);
          smallMap = (<img src = {'worldmap.jpeg'}></img>)
        }
      }
      else{
        smallMap = null;
      }
      return smallMap;
    }

    renderDistance(distance){
      if(distance){
        return distance;
      }
      else{
        return 0;
      }
    }

    translateDate(date){
      const finalDate = new Date(date);
      return `${finalDate.toDateString()} at ${finalDate.toLocaleTimeString()}`;
    }

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
        <ul className = "feed-workout-index-list">
          {Object.values(this.props.workouts).map(workout => <div className = "feed-workout-item" key = {workout.id}>
            <div>
              <li>{workout.title}</li>
              <li>{workout.description}</li>
              <li className = "feed-date">{this.translateDate(workout.created)}</li>
            </div>
            <div>
              <li className = "feed-workout-title">{workout.route.title}</li>
              <li>{this.renderMap(workout.route)}</li>

              <div className = "route-item-distance">
                <li className = "route-distance-value">
                  <strong>{this.renderDistance(workout.route.distance)}</strong>
                  <label className = "mi"> mi </label>
                </li>
                <label className = "distance-label">
                  Distance
                </label>
              </div>
            </div>

          </div>
        )
          }
        </ul>);
    }

    return(

      <div className = "feed-page">

      {displayWorkouts}
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
    );
  }
}

export default ActivityFeed
