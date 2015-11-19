var React = require('react');
var AuthBox = require('./AuthBox.react');
var AuthBoxStore = require('../stores/AuthBoxStore');

var MovieListingsApp = React.createClass({

	getInitialState: function()
	{
		return {
			auth: null
		}
	},

	render: function()
	{
		if (this.state.auth && this.state.auth.granted)
		{
			return <div>PROG</div>
		}
		else
		{
			return <AuthBox notification={null} />;
		}
	}
});

module.exports = MovieListingsApp;