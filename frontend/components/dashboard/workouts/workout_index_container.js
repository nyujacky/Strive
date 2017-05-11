import {connect} from 'react-redux';
import {requestWorkouts, requestMyWorkouts} from '../../../actions/workout_actions';
import WorkoutIndex from './workout_index';
import {requestRoutes,requestMyRoutes} from '../../../actions/route_actions';

const mapStateToProps = state => {
  //
  let myworkouts;
  if (state.workout === null){
    myworkouts = 0;
  }else{
    myworkouts = state.workout;
  }

  let myroutes;
  if (state.route === null){
    myroutes = 0;
  }else{
    myroutes = state.route;
  }

  return {workouts: myworkouts,
    routes: myroutes,
  currentUser: state.session.currentUser};
};

const mapDispatchToProps = dispatch => {
  return{
    requestWorkouts: (userId) => dispatch(requestWorkouts(userId)),
    requestRoutes: (userId) => dispatch(requestRoutes(userId)),
    requestMyWorkouts: () => dispatch(requestMyWorkouts()),
    requestMyRoutes: () => dispatch(requestMyRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutIndex);
