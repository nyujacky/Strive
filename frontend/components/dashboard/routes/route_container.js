import { connect } from 'react-redux';
import {createRoute} from '../../../actions/route_actions';
import RouteForm from './route_form';

const mapStateToProps = (state, ownProps) => {

  return({
    // route: state.routes[ownProps.params.routeId],
    currentUserId: state.session.currentUser.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    createRoute: (route) => dispatch(createRoute(route))
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(RouteForm);
