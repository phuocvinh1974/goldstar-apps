var React = require('react');
var MovieListingsActions = require('../actions/MovieListingsActions');
var datetimeHelper = require('../helpers/datetimeHelper');

var MovieListingsQuickAdd = React.createClass({

	getInitialState: function () {
		return {
			ReleaseDate: null
		}
	},

	render: function () {
		return (
			<div>
				<input placeholder="Movie Short Title" />
				<input placeholder="International Title" />
				<input placeholder="Title" />
				<input placeholder="Runtime" />
				<select onChange={this._movieFormatChange}>
					<option value="2D">2D</option>
					<option value="3D">3D</option>
				</select>
				<input value={this.state.ReleaseDate} onChange={this._movieReleaseDateChange} placeholder="Release Date" />
				<button onClick={this._addNewMovie}>ADD</button>
			</div>
		);
	},

	// EVENTS
	_movieFormatChange: function () {
		console.log ('format changed')
	},
	_movieReleaseDateChange: function (e) {
		this.setState({ ReleaseDate: datetimeHelper.dateMaskedInput(e.target.value) });
	},

	// ACTIONS
	_addNewMovie: function () {
		MovieListingsActions.addNewMovie(this.state);
	}
});

module.exports = MovieListingsQuickAdd;