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
					<MovieEditor comm={{ actions: { closeEditor: this._closeEditor } }} />
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

	// componentWillReceiveProps: function (nP) {
	// 	if (this.props.listOfMovies!==nP.listOfMovies)
	// 	{
	// 		this.setState({ movies: nP.listOfMovies })
	// 	} 
	// },

	shouldComponentUpdate: function (nP,nS) {
		return nP.listOfMovies !== this.props.listOfMovies || nS.showMovieEditor !== this.state.showMovieEditor;
	},

	getInitialState: function () {
		return {
			showMovieEditor: false
		}
	},

	render: function () {

		console.log ('render::MovieGrid')
	
		var movies = this.props.listOfMovies.map( function (movie) {
			return (
				<div key={movie._id} className="movie-grid-item">
					<div style={{width:120}}>{movie.shortTitle}</div>
					<div style={{width:200}}>{movie.IntTitle}</div>
					<div style={{width:80}}>{movie.mediaFormat}</div>
					<div style={{width:100}}>{movie.ReleaseDate.sec}</div>
				</div>
			);
		});

		return (
			<div className="movie-grid">
				<div><i onClick={this._showMovieEditor} className="material-icons">add_circle</i></div>
				{ this.animationMovieEditor () }
				<div className="movie-grid-items">
					<div className="movie-grid-items-head">
						<div style={{width:120}}>SHORT TITLE</div>
						<div style={{width:200}}>INTERNATIONAL TITLE</div>
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

	_showMovieEditor: function () {
		this.setState({ showMovieEditor: true });
	}
});

module.exports = MovieGrid;