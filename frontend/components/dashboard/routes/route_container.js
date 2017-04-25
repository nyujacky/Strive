// import { connect } from 'react-redux';
// import {requestRoute} from '../../../actions/route_actions';
// import RouteForm from './route_form';
//
// const mapStateToProps = (state, ownProps) => {
//   const formType = ownProps.params.routeId ? 'Edit Route' : 'Add Route';
//   return({
//     route: state.routes[ownProps.params.routeId],
//     formType
//   })
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   const submitRoute = ownProps.params.routeId ? updateRoute : createRoute;
//   return {
//     requestRoute: () => dispatch(requestRoute(ownProps.params.routeId)),
//     submitEvent: route => dispatch(submitEvent(route))
//   }
// };
//
// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(RouteForm);
