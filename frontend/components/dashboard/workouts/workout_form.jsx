import React from 'react';
import {Link, hashHistory} from 'react-router';
import Dashboard from "../dashboard";
import Modal from 'react-modal';

class WorkoutForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isShowingModal: false,
      title: "",
      description: "",
      user_id: this.props.currentUserId,
      route_id: null
    };

  }

  handleSubmit(e){
    // debugger
    e.preventDefault();
    // debugger
    this.props.createRoute(this.state)
      .then(()=> hashHistory.push('/workouts'));


  }
  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(){
    this.setState({isShowingModal: true});
  }

  handleClose(){

    this.setState({isShowingModal: false});
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  render(){
    return(
      <div className = "create-workout-container">
        <div>
          <Dashboard/>
        </div>
        <div className = "create-workout-form">
          <form onSubmit = {this.handleSubmit} className = "add-route-form" >
            <div className = "workout-title-field">
              <label> Route Name (required) </label>
              <input required
                type = "text"
                onChange = {this.update('title')}
                className = "create-route-title" >

              </input>
            </div>
           <div className = "workout-description-field">
             <label> Description </label>
             <textarea onChange = {this.update('description')}className = "create-route-description" >

             </textarea>
           </div>
           <div className = "cancel-save-buttons">
             <button type = "submit" onClick = {this.handleClose}  className = "cancel-button">
               Cancel
             </button>
             <input type = "submit" className = "save-button" value = "Save"/>


           </div>
          </form>
        </div>



          <Modal
           className={'modal-box'}
           isOpen={this.state.isShowingModal}
           onRequestClose={this.handleClose}
           contentLabel="SessionForm Modal">

          </Modal>
      </div>
    );
  }


}

export default WorkoutForm;
