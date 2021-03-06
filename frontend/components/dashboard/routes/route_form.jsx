import React from 'react';
import {Link, hashHistory} from 'react-router';
import Dashboard from "../dashboard";
import RouteMap from "../../map/routemap";
import Modal from 'react-modal';

class RouteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShowingModal: false,
      title: "",
      description: "",
      user_id: this.props.currentUserId,
      routepolystring: "",
      distance: 0.0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePolyLine = this.updatePolyLine.bind(this);
    this.updateDistance = this.updateDistance.bind(this);
  }
  handleSubmit(e){
    //
    e.preventDefault();
    //
    debugger
    this.props.createRoute(this.state)
      .then(()=> hashHistory.push('/routes'));
      // .then(()=> hashHistory.push(`/user_routes`));


  }

  update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
  }
  updatePolyLine(string){
    this.setState({routepolystring: string});
  }
  updateDistance(miles){
    this.setState({distance: miles});
  }
  handleClick(){
    this.setState({isShowingModal: true});
  }

  handleClose(){

    this.setState({isShowingModal: false});
  }

  componentWillMount() {
   Modal.setAppElement('body');
 }

  render(){
    return(
      <div className = "create-map-container">
        <div>
          <Dashboard/>
          <div className = "create-map-navbar">
            <div className = "nav-left">
              <div className = "">
                Strive Route Builder
              </div>
              <div className = "create-map-buttons">
                <button className = "delete-route-button">
                  Clear
                </button>
              </div>
            </div>
            <button onClick={this.handleClick} className = "route-save-button">
              Save
            </button>
          </div>
        </div>

        <div className = "map-container">

          <RouteMap updatePolyLine = {this.updatePolyLine} updateDistance = {this.updateDistance}/>
        </div>
        <Modal
         className={'modal-box'}
         isOpen={this.state.isShowingModal}
         onRequestClose={this.handleClose}
         contentLabel="SessionForm Modal">
         <div className = "create-route-modal-title">
           Save
         </div>
         <form onSubmit = {this.handleSubmit}  className = "create-route-modal-form">
           Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
            <div className = "title-field">
              <label> Route Name (required) </label>
              <input required
                type = "text"
                onChange = {this.update('title')}
                className = "create-route-title" >

              </input>
            </div>
           <div className = "description-field">
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
       </Modal>
      </div>

    );
  }
}
export default RouteForm;
