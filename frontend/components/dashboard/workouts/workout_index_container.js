import {connect} from 'react-redux';
import {requestWorkouts} from '../../../actions/workout_actions';
import WorkoutIndex from './workout_index';
import {requestRoutes} from '../../../actions/route_actions';

const mapStateToProps = state => {
  // debugger
  let myworkouts;
  if (state.workouts === null){
    myworkouts = 0;
  }else{
    myworkouts = state.workout;
  }
  return {workouts: myworkouts,
  currentUser: state.session.currentUser};
};

const mapDispatchToProps = dispatch => {
  return{
    requestWorkouts: (userId) => dispatch(requestWorkouts(userId)),
    requestRoutes: (userId) => dispatch(requestRoutes(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
