var React = require('react');
var AuthBoxActions = require('../actions/AuthBoxActions');

var AuthBox = React.createClass({

	getInitialState: function()
	{
		return {
			username: null, password: null
		}
	},

	render: function()
	{
		return (
			<div className="auth-box">
				<div className="auth-box-top">
					<div><i className="material-icons">close</i></div>
					<div>Sign in to your account.</div>
				</div>
				<div className="auth-box-mid">
					<input value={this.state.username} onChange={this._usernameOnChange} className="simple-input" type="text" placeholder="Enter Username" />
					<input value={this.state.password} onChange={this._passwordOnChange} className="simple-input" type="password" placeholder="Password" />
				</div>
				<div className="auth-box-notification">{this.props.notification}</div>
				<div className="auth-box-bottom">
					<button onClick={this._signinOnClick} className="simple-button">SIGN IN</button>
				</div>
				<div className="auth-box-logo"><div></div></div>
			</div>
		)
	},
	
	_usernameOnChange: function(e)
	{
		this.setState({username: e.target.value});
	},

	_passwordOnChange: function(e)
	{
		this.setState({password: e.target.value});
	},
	
	_signinOnClick: function()
	{
		AuthBoxActions.signIn(this.state.username, this.state.password);
	}
});

module.exports = AuthBox;