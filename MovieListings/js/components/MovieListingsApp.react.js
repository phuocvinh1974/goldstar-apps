var React = require('react');

var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var UIStore = require('../stores/UIStore');

var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');
var MovieListingsStore = require('../stores/MovieListingsStore');


var MovieListingsApp = React.createClass({

	// componentDidMount: function () {
	// 	MovieListingsStore.addChangeListener(this._onChange);
	// },

	render: function () {
		return (
			<div className="app">
				<UITopbar _title="MOVIE LISTINGS MANAGER" />
				<MovieListingsQuickAdd />
				<MovieListingsGrid />
				<UIDrawer show={false} />
				<UIMoreMenu show={false} />
			</div>
		);
	}

	// _onChange: function () {
	// 	console.log('hey changed')
	// }
});

module.exports = MovieListingsApp;