import {connect} from 'react-redux';
import {requestRoute} from '../../../actions/route_actions';
import RouteShow from './route_show';

const mapStateToProps = state => {
  return{
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return{
    requestRoute: route => dispatch(requestRoute(route))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);
