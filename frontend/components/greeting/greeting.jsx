import React from 'react';
import { Link,hashHistory} from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">LOG IN</Link>
  </nav>
);



const personalGreeting = (currentUser, logout) => {
  // const redirectIfLoggedOut = () => {
  //
  //   logout.then(hashHistory.push('/'));
  // };
  const handleLogout = (e) =>{
    logout(e).then(()=> hashHistory.push('/'));
  }
  return (
  <hgroup className="header-group">
    <div className = "header-group-container">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <div className = "header-button-container">
        <button className="header-button" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
	</hgroup>
);
};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

// &nbsp;or&nbsp;
// <Link to="/signup" activeClassName="current">Sign up!</Link>
export default Greeting;
