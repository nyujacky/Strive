import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => {
  return (
    <div >
      <div className = "index-nav" >
    
        <h1 className = "index-header"> Strive</h1>
        <GreetingContainer />
        {children}
      </div>

      <div className = "index-content">

      </div>
    </div>
  );
};

export default App;
