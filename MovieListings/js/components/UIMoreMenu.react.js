var React = require('react');
var ReactDOM = require('react-dom');
var UIActions = require('../actions/UIActions');
var AuthBoxActions = require('../actions/AuthBoxActions');

var UIMoreMenu = React.createClass({

	componentDidMount: function () {
		this.state.rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
	},

	componentWillReceiveProps: function(nextProps) {
		if(nextProps.comm.mouseContext.x < this.state.rect.left)
			UIActions.hideMoreMenu ();
	},

	getInitialState: function () {
		return {
			rect: null
		};
	},

	render: function () {

		var rect = this.props.config.rect;
		var baseStyle = { position:'absolute', right:window.innerWidth-rect.right, top:rect.top};

		return (
			<div className="simple-menu" style={baseStyle}>
				<div onClick={this._logoutClick}>Logout</div>
				<div>Setting</div>
				<div>Help</div>
			</div>
		);
	},

	_logoutClick: function () {
		AuthBoxActions.signOut ();
		UIActions.hideMoreMenu ();
	}
});

module.exports = UIMoreMenu;