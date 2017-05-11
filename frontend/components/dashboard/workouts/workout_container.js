import {connect} from 'react-redux';
import {createWorkout} from '../../../actions/workout_actions';
import WorkoutForm from './workout_form';
import {requestMyRoutes} from '../../../actions/route_actions'

const mapStateToProps = (state) => {
  // let myroutes;
  // if (state.route === null){
  //   myroutes = 0;
  // }else{
  //   myroutes = state.route;
  // }
  return ({
    routes: state.route,
    currentUserId: state.session.currentUser? state.session.currentUser.id : 0
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createWorkout: (workout) => dispatch(createWorkout(workout)),
    requestMyRoutes: ()=> dispatch(requestMyRoutes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutForm);
