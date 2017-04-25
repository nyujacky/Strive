import React from 'react';
import {Link} from 'react-router';
import RouteFormContainer from './route_container';
// import DashboardContainer from './dashboard_container';
import Dashboard from "../dashboard";
import RouteMap from "../../map/routemap";
import {ModalContainer, ModalDialog} from 'react-modal-dialog';


class RouteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShowingModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(){
    this.setState({isShowingModal: true});
  }

  handleClose(){

    this.setState({isShowingModal: false});
  }

  render(){
    return(
      <div className = "something">
        <div>
          <Dashboard/>
          <div className = "create-map-navbar">
            <div className = "nav-left">
              <div className = "">
                Strive Route Builder
              </div>
            </div>
            <button onClick={this.handleClick} className = "route-save-button">
              Save
            </button>
          </div>
        </div>

        <div className = "map-container">

          <RouteMap/>
        </div>

        <div onClick={this.handleClick}>
              {
                this.state.isShowingModal &&
                <ModalContainer onClose={this.handleClose}>
                  <ModalDialog onClose={this.handleClose}>
                    <h1>Dialog Content</h1>
                    <form>
                      <input>
                        
                      </input>
                    </form>
                  </ModalDialog>
                </ModalContainer>
              }
            </div>
      </div>

    );
  }
}

export default RouteForm;
