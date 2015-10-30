var React = require('react');

var MovieListingsTopbar = require('./MovieListingsTopbar.react');
var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');

var MovieListingsApp = React.createClass({
	render: function () {
		return (
			<div>
				<MovieListingsTopbar />
				<div>
					<MovieListingsQuickAdd />
					<MovieListingsGrid />
				</div>
			</div>
		);
	}
});

module.exports = MovieListingsApp;