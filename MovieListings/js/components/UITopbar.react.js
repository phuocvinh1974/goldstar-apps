var React = require('react');
var assign = require('object-assign');
var UIActions = require('../actions/UIActions');

var UITopbar = React.createClass({
	
	render: function () {
		
		var baseStyle = {display:'-webkit-flex',height:48,WebkitAlignItems:'center',color:'#F3E5F5',backgroundColor:'#8E24AA'};
		
		return (
			<div style={assign(baseStyle,{WebkitJustifyContent:'space-between'})}>
				<div style={baseStyle}>
					<i onClick={this._showDrawer} className="material-icons" style={{marginLeft:10,cursor:'pointer'}}>menu</i>
					<span style={{marginLeft:20}}>{this.props._title}</span>
				</div>
				<div style={baseStyle}>
					<i onClick={this._showMenuMore} className="material-icons" style={{marginRight:10,cursor:'pointer'}}>more_vert</i>
				</div>
			</div>
		);
	},

	// ACTIONS
	_showDrawer: function () {
		UIActions.showDrawer ();
	},
	_showMenuMore: function (e) {
		UIActions.showMoreMenu (e.target.getBoundingClientRect());
	}
});

module.exports = UITopbar;