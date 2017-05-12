import {connect} from 'react-redux';
import {requestMyRoutes} from '../../actions/route_actions';
import {requestMyWorkouts} from '../../actions/workout_actions';
import ActivityFeed from './activityfeed';

const mapStateToProps = state => {
  let myroutes;
  let myworkouts;
  if(state.route === null){
    myroutes = 0;
  }
  else{
    myroutes = state.route;
  }
  if(state.workout === null){
    myworkouts = 0;
  }
  else{
    myworkouts = state.workout;
  }
  return({
    routes: state.route,
    workouts: state.workout,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return{
    requestMyRoutes: ()=> dispatch(requestMyRoutes()),
    requestMyWorkouts: ()=> dispatch(requestMyWorkouts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);
