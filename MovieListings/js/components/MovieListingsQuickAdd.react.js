var React = require('react');
var MovieListingsActions = require('../actions/MovieListingsActions');
var datetimeHelper = require('../helpers/datetimeHelper');

var MovieListingsQuickAdd = React.createClass({

	getInitialState: function () {
		return {
			shortTitle: null, IntTitle: null, mediaFormat: null, ReleaseDate: null
		}
	},

	render: function () {
		return (
			<div>
				<input value={this.state.shortTitle} onChange={this._movieShortTitleChange} placeholder="Movie Short Title" />
				<input value={this.state.IntTitle} onChange={this._movieIntTitleChange} placeholder="International Title" />
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
	_movieShortTitleChange: function (e) {
		this.setState({ shortTitle: e.target.value });
	},
	_movieIntTitleChange: function (e) {
		this.setState({ IntTitle: e.target.value });
	},
	_movieFormatChange: function (e) {
		this.setState({ mediaFormat: e.target.value });
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