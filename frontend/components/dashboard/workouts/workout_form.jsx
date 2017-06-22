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
      route_id: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    //
    e.preventDefault();
    //
    if(this.state.route_id == 0){
      alert("Please create or select a route first.");
    }
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
    this.props.requestMyRoutes();

  }


  render(){

    let displayRoutes;
    if (this.props.routes.route === null) {
    }
    else{

        displayRoutes = (
        <select onChange = {this.update("route_id")} className = "route-index-list">
          <option > -- </option>
          {Object.values(this.props.routes).map(route =>


              <option value = {route.id} key = {route.id} className = "route-item-title">{route.title}</option>

            )
          }
        </select>);
    }
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
               <div className = "choose-routes">

                 {displayRoutes}
                 <div className = "route-index-header-small">
                 <Link to ="/routes/new"> Create Route </Link>
                 </div>
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
