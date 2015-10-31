var React = require('react');
var MovieListingsActions = require('../actions/MovieListingsActions');

var MovieListingsTopbar = React.createClass({
	render: function () {
		return (
			<div>
				<button onClick={this._readme}>README</button>
			</div>
		);
	},

	_readme: function () {
		MovieListingsActions.readme()
	}
});

module.exports = MovieListingsTopbar;