import {connect} from 'react-redux';
import {requestRoutes} from '../../../actions/route_actions';
import RouteIndex from './route_index';

const mapStateToProps = state =>{
  // debugger
  let myroutes;
  if (state.route === null){
    myroutes = 0;
  }else{
    myroutes = state.route;
  }
  // debugger
  return{routes: myroutes,
  currentUser: state.session.currentUser};
};
const mapDispatchToProps = dispatch => {
  return {
    requestRoutes: (userId) => dispatch(requestRoutes(userId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(RouteIndex);
