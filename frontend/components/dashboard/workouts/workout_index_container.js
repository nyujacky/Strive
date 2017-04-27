import {connect} from 'react-redux';
import {requestWorkouts} from '../../../actions/workout_actions';
import WorkoutIndex from './workout_index';

const mapStateToProps = state => {
  let myworkouts;
  if (state.workouts === null){
    myworkouts = 0
  }else{
    myworkouts = state.workout
  }
  return {workouts: myworkouts};
};

const mapDispatchToProps = dispatch => {
  return{
    requestWorkouts: (userId) => dispatch(requestWorkouts(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
