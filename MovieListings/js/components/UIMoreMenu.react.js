var React = require('react');
var ReactDOM = require('react-dom');
var UIActions = require('../actions/UIActions');

var UIMoreMenu = React.createClass({

	componentDidMount: function () {
		this.state.rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
	},

	componentWillReceiveProps: function(nextProps) {
		if(nextProps.comm.mouseContext.x < this.state.rect.left)
			UIActions.menuHideMore()
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
				<div>Logout</div>
				<div>Setting</div>
				<div>Help</div>
			</div>
		);
	}
});

module.exports = UIMoreMenu;