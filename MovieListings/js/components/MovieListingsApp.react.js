var React = require('react');

var MovieListingsTopbar = require('./MovieListingsTopbar.react');
var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');

var MovieListingsStore = require('../stores/MovieListingsStore');

var xyz = require('../helpers/xyz');

var MovieListingsApp = React.createClass({

	// componentDidMount: function () {
	// 	MovieListingsStore.addChangeListener(this._onChange);
	// },

	render: function () {
		return (
			<div>
				<div>{xyz.msg}</div>
				<MovieListingsTopbar />
				<div>
					<MovieListingsQuickAdd />
					<MovieListingsGrid />
				</div>
			</div>
		);
	}

	// _onChange: function () {
	// 	console.log('hey changed')
	// }
});

module.exports = MovieListingsApp;