import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.guestLogin = this.guestLogin.bind(this);
		this.guestLoginButton = this.guestLoginButton.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	componentWillReceiveProps(newProps){
		if(this.props.errors === newProps.errors){

			this.props.receiveErrors([]);
		}
	}
	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/dashboard");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(user);

	}

	guestLogin(e){
		e.preventDefault();
		this.props.guestLogin({email: "doggo@gmail.com", password: "123456"});
	}

	guestLoginButton(){
		// debugger
		if (this.props.formType === "login"){
			return <button className = "login-button" onClick = {this.guestLogin} >{"Guest Login"}</button>
		}
		else{
			return null
		}
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">Sign up</Link>;
		} else {
			return <Link to="/login">Log in</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}


	render() {

		return (
			<div className="login-form-container">
				<nav className = "login-navbar">
					<div className = "login-navbar-links">
						<div>
							<Link to="/" className = "logo-link">STRIVE</Link>
						</div>
						<div className = "nav-link">{this.navLink()}</div>
					</div>

				</nav>

				<form onSubmit={this.handleSubmit} className="login-form-box">

					<div className="login-form">

						<div className = "login-form-title">
							{this.props.formType}
						</div>
						<div className = "placeholder">

						</div>
						<br/>

						<div className = "login-fields">
							<label className = "email-field">
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input"
									placeholder = " Your Email"/>
							</label>
							<br/>
							<label className = "password-field">
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input"
									placeholder = " Password"/>
							</label>
							<div className = "errors">
								{this.renderErrors()}
							</div>
							<br/>
								<button className = "login-button">{this.props.formType}</button>
								{this.guestLoginButton()}
						</div>
					</div>
				</form>
			</div>
		);
	}

}
export default withRouter(SessionForm);
