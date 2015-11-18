var React = require('react');
var MovieListingsActions = require('../actions/MovieListingsActions');
var datetimeHelper = require('../helpers/datetimeHelper');

var MovieEditor = React.createClass({

	formValidation: function () {

		if (this.state.shortTitle === '' || this.state.shortTitle === null) return false;

		return true;
	},

	componentWillReceiveProps: function (nP) {
		if (nP.comm.actions.reset!==this.props.comm.actions.reset)
			this.replaceState(this.getInitialState())
	},

	getInitialState: function () {
		return {
			shortTitle: null, IntTitle: null, Title: null,
			Runtime: null, mediaFormat: '2D', ReleaseDate: null
		}
	},

	render: function () {

		var buttons = null;

		if (this.props.updateMode)
		{
			buttons = (
				<div className="movie-editor-buttons">
					<button>DELETE</button><button>UPDATE</button>
				</div>
			);
		}
		else
		{
			buttons = (
				<div className="movie-editor-buttons">
					<button onClick={this._movieAdd}>ADD</button>
				</div>
			);
		}

		return (
			<div className="movie-editor">
				<div style={{height:120}} className="movie-editor-head"><i onClick={this.props.comm.actions.closeEditor} className="material-icons">close</i></div>
				<div className="movie-editor-inputs">
					<div><input value={this.state.shortTitle} onChange={this._shortTitleOnChange} className="material-input" placeholder="Movie Short Title" /></div>
					<div><input value={this.state.IntTitle} onChange={this._inttitleOnChange} className="material-input" placeholder="International Title" /></div>
					<div><input value={this.state.Title} onChange={this._titleOnChange} className="material-input" placeholder="Title" /></div>
					<div><input value={this.state.Runtime} onChange={this._runtimeOnChange} className="material-input" placeholder="Runtime (minutes)" /></div>
					<div>
						<select onChange={this._movieFormatChange} className="material-input">
							<option value="2D">2D</option>
							<option value="3D">3D</option>
							<option value="BOTH">BOTH</option>
						</select>
					</div>
					<div><input value={this.state.ReleaseDate} onChange={this._movieReleaseDateChange} className="material-input" placeholder="Release Date" /></div>
				</div>
				{ buttons }
			</div>
		);
	},

	// SELF EVENTS
	_shortTitleOnChange: function (e) {
		this.setState({ shortTitle: e.target.value.toUpperCase().trim() });
	},
	_inttitleOnChange: function (e) {
		this.setState({ IntTitle: e.target.value });
	},
	_titleOnChange: function (e) {
		this.setState({ Title: e.target.value });
	},
	_runtimeOnChange: function (e) {
		this.setState({Runtime: e.target.value});
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