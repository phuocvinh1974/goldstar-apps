var React = require('react');

var UIDrawer = React.createClass({
	render: function () {
		return <div>DRAWER: {this.props.comm.x}</div>;
	}
});

module.exports = UIDrawer;