var React = require('react');
var assign = require('object-assign');
var UIActions = require('../actions/UIActions');

var UITopbar = React.createClass({
	
	render: function () {
		
		var baseStyle = {display:'-webkit-flex',height:48,WebkitAlignItems:'center',color:'#F3E5F5',backgroundColor:'#8E24AA'};
		
		return (
			<div style={assign(baseStyle,{WebkitJustifyContent:'space-between'})}>
				<div style={baseStyle}>
					<i onClick={this._menuShowDrawer} className="material-icons" style={{marginLeft:10,cursor:'pointer'}}>menu</i>
					<span style={{marginLeft:20}}>{this.props._title}</span>
				</div>
				<div style={baseStyle}>
					<i className="material-icons" style={{marginRight:5}}>person</i>
					<span style={{marginRight:20}}>username!</span>
					<i onClick={this._menuShowMore} className="material-icons" style={{marginRight:10,cursor:'pointer'}}>more_vert</i>
				</div>
			</div>
		);
	},

	// ACTIONS
	_menuShowDrawer: function () {
		UIActions.menuShowDrawer();
	},
	_menuShowMore: function (e) {
		UIActions.menuShowMore(e.target.getBoundingClientRect());
	}
});

module.exports = UITopbar;