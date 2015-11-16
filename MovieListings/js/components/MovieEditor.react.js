var React = require('react');
var MovieListingsActions = require('../actions/MovieListingsActions');
var datetimeHelper = require('../helpers/datetimeHelper');

var MovieEditor = React.createClass({

	formValidation: function () {

		if (this.state.shortTitle === '' || this.state.shortTitle === null) return false;

		return true;
	},

	getInitialState: function () {
		return {
			shortTitle: null, IntTitle: null, Title: null,
			Runtime: null, mediaFormat: null, ReleaseDate: null
		}
	},

	render: function () {

		return (
			<div className="movie-editor">
				<div style={{height:120}} className="movie-editor-head"><i onClick={this.props.comm.actions.closeEditor} className="material-icons">close</i></div>
				<div className="movie-editor-inputs">
					<div><input value={this.state.shortTitle} onChange={this._movieShortTitleChange} className="material-input" placeholder="Movie Short Title" /></div>
					<div><input value={this.state.IntTitle} onChange={this._movieIntTitleChange} className="material-input" placeholder="International Title" /></div>
					<div><input className="material-input" placeholder="Title" /></div>
					<div><input className="material-input" placeholder="Runtime (minutes)" /></div>
					<div>
						<select onChange={this._movieFormatChange} className="material-input">
							<option value="2D">2D</option>
							<option value="3D">3D</option>
							<option value="BOTH">BOTH</option>
						</select>
					</div>
					<div><input value={this.state.ReleaseDate} onChange={this._movieReleaseDateChange} className="material-input" placeholder="Release Date" /></div>
				</div>
				<div><button onClick={this._movieAdd}>ADD</button></div>
			</div>
		);
	},

	// SELF EVENTS
	_movieShortTitleChange: function (e) {
		this.setState({ shortTitle: e.target.value.toUpperCase().trim() });
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
	_movieAdd: function () {
		if (this.formValidation()) {
			MovieListingsActions.addMovie (this.state);
		}
	}
});

module.exports = MovieEditor;