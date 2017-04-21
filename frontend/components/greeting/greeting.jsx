import React from 'react';
import { Link,hashHistory} from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
  </nav>
);



const personalGreeting = (currentUser, logout) => {
  // const redirectIfLoggedOut = () => {
  //   debugger
  //   logout.then(hashHistory.push('/'));
  // };
  const handleLogout = (e) =>{
    logout(e).then(()=> hashHistory.push('/'));
  }
  return (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={handleLogout}>Log Out</button>
	</hgroup>
);
};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

// &nbsp;or&nbsp;
// <Link to="/signup" activeClassName="current">Sign up!</Link>
export default Greeting;
