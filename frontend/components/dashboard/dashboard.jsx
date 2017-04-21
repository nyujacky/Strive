import React from 'react';
import {Link} from 'react-router';
// import DashboardContainer from './dashboard_container';


class Dashboard extends React.Component{

  render(){
    return(
      <div className = "home-page-nav-bar">
        <div>
          <Link to="/" className = "home-page-logo">STRIVE</Link>

        </div>

      </div>
    );
  }
}

export default Dashboard;
