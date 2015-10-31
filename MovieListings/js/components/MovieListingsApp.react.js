var React = require('react');

var MovieListingsTopbar = require('./MovieListingsTopbar.react');
var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');

var MovieListingsStore = require('../stores/MovieListingsStore');

var MovieListingsApp = React.createClass({

	// componentDidMount: function () {
	// 	MovieListingsStore.addChangeListener(this._onChange);
	// },

	render: function () {
		return (
			<div>
				<MovieListingsTopbar />
				<MovieListingsQuickAdd />
				<MovieListingsGrid />
			</div>
		);
	}

	// _onChange: function () {
	// 	console.log('hey changed')
	// }
});

module.exports = MovieListingsApp;