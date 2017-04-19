import {connect} from 'react-redux';
import SessionForm from './session_form_container'

const mapStateToProps = (state, ownProps)=> {
  return{
    loggedIn: state.currentUser.nil(),
    errors: state.errors,
    formType: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm:
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
