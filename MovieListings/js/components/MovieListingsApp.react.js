var React = require('react');
var AuthBox = require('./AuthBox.react');
var AuthBoxStore = require('../stores/AuthBoxStore');

var MovieListingsApp = React.createClass({

	getInitialState: function()
	{
		return {
			auth: AuthBoxStore.getAuth()
		}
	},

	componentDidMount: function()
	{
		AuthBoxStore.addChangeListener(this._authboxOnChange);
	},

	render: function()
	{
		if (this.state.auth.granted)
		{
			return <div>PROG</div>
		}
		else
		{
			return <AuthBox notification={this.state.auth.msg} />;
		}
	},

	_authboxOnChange: function()
	{
		this.setState({auth: AuthBoxStore.getAuth()});
	}
});

module.exports = MovieListingsApp;