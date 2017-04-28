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
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    // debugger
    e.preventDefault();
    // debugger
    this.props.createWorkout(this.state)
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
    // debugger
    Modal.setAppElement('body');
    // this.props.requestMyRoutes();
    // debugger
  }
  render(){
    // let selectRoute;
    // let fullRoutes;
    // // debugger
    // if (this.props.routes.route === null){
    //   // fullRoutes = (<select>
    //     <option>No Routes</option>
    //   // </select>);
    //
    // }
    // else{
    //   selectRoute = Object.values(this.props.routes).map((route, id) =>
    //     <option key = {id} >
    //     { route.title }
    //     </option>);
    //   fullRoutes = (
    //     selectRoute
    // );
    // }
    return(
      <div className = "create-workout-page">
        <div>

          <Dashboard/>
        <div className = "create-workout-container">
          <div className = "create-workout-form">
            <div className = "workout-name-description">
              <form onSubmit = {this.handleSubmit} className = "add-workout-form" >
                <div className = "workout-title-field">
                  <label> Workout Title (required) </label>
                  <input required
                    type = "text"
                    onChange = {this.update('title')}
                    className = "create-workout-title" >

                  </input>
                </div>
               <div className = "workout-description-field">
                 <label> Description </label>
                 <textarea onChange = {this.update('description')}className = "create-workout-description" >

                 </textarea>
               </div>
               <div className = "cancel-save-buttons">
                 <button className = "cancel-button">
                   <Link to = "/workouts"> Cancel </Link>
                 </button>
                 <input type = "submit" className = "save-button" value = "Save"/>

               </div>
              </form>
            </div>
          </div>
        </div>



          <Modal
           className={'modal-box'}
           isOpen={this.state.isShowingModal}
           onRequestClose={this.handleClose}
           contentLabel="SessionForm Modal">

          </Modal>
        </div>
      </div>
    );
  }


}

export default WorkoutForm;


// <button type = "submit" onClick = {this.handleClose}  className = "cancel-button">
//   Cancel
// </button>






// <div className="styled-select blue semi-square">
//   <select>
//     { fullRoutes }
//   </select>
// </div>
