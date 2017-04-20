import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Link} from 'react-router';

const App = ({children}) => {
  return (
    <div >
      <div className = "index-nav" >
        <Link to="/" className = "index-header">STRIVE</Link>

        <GreetingContainer />
        {children}
      </div>

      <div className = "index-content">

      </div>
    </div>
  );
};

export default App;
