var React = require('react');
var VelocityComponent = require('velocity-react').VelocityComponent;
var colorsHelper = require('../helpers/colorsHelper');
var MovieEditor = require('./MovieEditor.react');
var UIActions = require('../actions/UIActions');
var MovieListingsActions = require('../actions/MovieListingsActions');

var MovieGrid = React.createClass({

	animationMovieEditor: function () {
		if (this.state.showMovieEditor)
		{
			return (
				<VelocityComponent animation={{rotateY:[0,-90]}} duration={500} runOnMount={true}>
					<MovieEditor updateMode={this.state.updateMode} comm={{ actions: { closeEditor: this._closeEditor, reset: this.props.comm } }} />
				</VelocityComponent>
			);
		}
		else
		{
			return null;
		}
	},

	componentDidMount: function () {
		MovieListingsActions.listMovies ();
	},

	shouldComponentUpdate: function (nP,nS) {
		return nP.listOfMovies !== this.props.listOfMovies || nS.showMovieEditor !== this.state.showMovieEditor || nS.updateMode !== this.state.updateMode;
	},

	getInitialState: function () {
		return {
			showMovieEditor: false, updateMode: false,
			previousSelected: null
		}
	},

	render: function () {
	
		var movies = this.props.listOfMovies.map( function (movie) {
			return (
				<div key={movie._id} data-movie-id={movie._id} onClick={this._showMovieEditorForUpdate} className="movie-grid-item">
					<div style={{width:100}}>{movie.shortTitle}</div>
					<div style={{width:200}}>{movie.IntTitle}</div>
					<div style={{width:200}}>{movie.Title}</div>
					<div style={{width:80}}>{movie.mediaFormat}</div>
					<div style={{width:100}}>{movie.ReleaseDate}</div>
				</div>
			);
		}.bind (this));

		return (
			<div className="movie-grid">
				<div><i onClick={this._showMovieEditor} className="material-icons">add_circle</i></div>
				{ this.animationMovieEditor () }
				<div className="movie-grid-items">
					<div className="movie-grid-items-head">
						<div style={{width:100}}>SHORT</div>
						<div style={{width:200}}>INT. TITLE</div>
						<div style={{width:200}}>TITLE</div>
						<div style={{width:80}}>FORMAT</div>
						<div style={{width:100}}>RELEASE DATE</div>
					</div>
					{ movies }
				</div>
			</div>
		);
	},

	// CALLBACK

	_closeEditor: function () {
		this.setState({ showMovieEditor: false });
	},

	// SELF EVENTS

	_showMovieEditorForUpdate: function (e) {

		if (e.target.parentNode.getAttribute('data-movie-id'))
		{
			console.log ('du lieu hop le')
			MovieListingsActions.getMovieInfos ('id o day')
		}

		// if (this.state.previousSelected)
		// 	this.state.previousSelected.style.backgroundColor = '';
		
		// e.target.parentNode.style.backgroundColor = '#F0F0F0';

		// if (e.target.parentNode===this.state.previousSelected)
		// {
		// 	e.target.parentNode.style.backgroundColor = '';
		// 	this.state.previousSelected = null;
		// 	this.setState({updateMode: false})
		// }
		// else
		// {
		// 	this.state.previousSelected = e.target.parentNode;
		// 	this.setState({updateMode: true})
		// }

		// this._showMovieEditor ();
	},

	_showMovieEditor: function () {
		if (!this.state.showMovieEditor)
			this.setState({ showMovieEditor: true });
	}
});

module.exports = MovieGrid;