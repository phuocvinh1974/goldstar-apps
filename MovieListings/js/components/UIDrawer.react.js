var React = require('react');
var ReactDOM = require('react-dom');
var UIActions = require('../actions/UIActions');

var UIDrawer = React.createClass({

	componentDidMount: function () {
		this.state.rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
	},

	componentWillReceiveProps: function(nextProps) {
		if (nextProps.comm.mouseContext.x < this.state.rect.left+nextProps.comm.translateX || nextProps.comm.mouseContext.x > this.state.rect.right+nextProps.comm.translateX)
		{
			UIActions.hideDrawer ();
		}
	},

	getInitialState: function () {
		return {
			rect: null
		};
	},

	render: function () {

		var baseStyle = {position:'absolute',left:-this.props.comm.translateX,top:0,width:this.props.comm.translateX,height:'100%'};

		return ( 
			<div className="navigation-drawer" style={baseStyle}>
				<div>...</div>
				<div>
					<div onClick={this._movieSchedulerClick}>MOVIE SCHEDULER</div>
					<div>MEMBER ZONE</div>
				</div>
			</div>
		);
	},

	_movieSchedulerClick: function () {
		console.log ('menu scheduler duoc lick')
	}
});

module.exports = UIDrawer;