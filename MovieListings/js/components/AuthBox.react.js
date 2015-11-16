var React = require('react');
var AuthBoxActions = require('../actions/AuthBoxActions');

var AuthBox = React.createClass({

	componentWillReceiveProps: function (nP) {
		this.state.msgText = nP.comm.msg.text;
		this.state.msgColor = nP.comm.msg.color;
	},

	getInitialState: function () {
		// username: null | password: null
		// REMEMBER: remove default value of input for user & pass
		return { username: 'admin', password: 'password', msgColor: '#000000', msgText: '' };
	},

	render: function () {

		console.log ('render::AuthBox')

		var fixWidth = 326;
		var fixHeight = 448;

		var baseStyle = {
			position: 'absolute', width: fixWidth, height: fixHeight,
			top: '50%', left: '50%',
			backgroundColor: '#ECEFF1',
			marginLeft: -(fixWidth/2), marginTop: -(fixHeight/2),
			boxShadow: '0px 0px 15px rgba(0,0,0,0.35)'
		};

		return (
			<div className="auth-box" style={baseStyle}>
				<div style={{backgroundColor:'#B0BEC5',backgroundImage:'url(img/login-head.png)'}}>
					<div><i onClick={this._closeClick} className="material-icons" style={{float:'right',paddingTop:8,paddingRight:8,paddingBottom:82,color:'#FFF',cursor:'pointer'}}>close</i></div>
					<div style={{clear:'both',paddingLeft:8,paddingBottom:8,fontSize:'16pt',color:'#FFF'}}>Sign in to your account.</div>
				</div>
				<div style={{padding:16}}>
					<div>
						<input onChange={this._usernameOnChange} value={this.state.username} type="text" className="material-input" style={{width:'100%'}} placeholder="Enter Username" />
					</div>
					<div style={{marginTop:8}}>
						<input onChange={this._passwordOnChange} value={this.state.password} type="password" className="material-input" style={{width:'100%'}} placeholder="Password" />
					</div>
					<div style={{marginTop:16,marginBottom:16,height:30,color:this.state.msgColor}}>{this.state.msgText}</div>
					<div style={{textAlign:'center',padding:'32px 0 16px 0'}}><button onClick={this._signinClick} style={{backgroundColor:'#155E77',color:'#FFF'}}>SIGN IN</button></div>
					<div style={{textAlign:'center',marginTop:48}}><img src="img/login-logo.png" style={{width:50,height:50}} /></div>
				</div>
			</div>
		);
	},

	// EVENTS

	_usernameOnChange: function (e) {
		this.setState({ username: e.target.value, msgText: '' });
	},

	_passwordOnChange: function (e) {
		this.setState({ password: e.target.value, msgText: '' });
	},

	_closeClick: function () {
		window.location = '/';
	},

	// ACTIONS EVENTS

	_signinClick: function () {
		AuthBoxActions.signIn (this.state);
	}
});

module.exports = AuthBox;