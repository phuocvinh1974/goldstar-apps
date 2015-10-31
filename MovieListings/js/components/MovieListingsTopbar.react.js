var React = require('react');
var assign = require('object-assign');

var MovieListingsTopbar = React.createClass({
	render: function () {
		
		var baseStyle = {display:'-webkit-flex',height:48,WebkitAlignItems:'center',color:'#F3E5F5',backgroundColor:'#8E24AA'};
		
		return (
			<div style={assign(baseStyle,{WebkitJustifyContent:'space-between'})}>
				<div style={baseStyle}>
					<i className="material-icons" style={{marginLeft:10,cursor:'pointer'}}>menu</i>
					<span style={{marginLeft:20}}>MOVIE LISTINGS MANAGER</span>
				</div>
				<div style={baseStyle}>
					<div style={{marginRight:10}}>username!</div>
					<div style={{marginRight:20}}>Logout</div>
				</div>
			</div>
		);
	}
});

module.exports = MovieListingsTopbar;