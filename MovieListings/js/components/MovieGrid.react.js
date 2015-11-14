var React = require('react');
var colorsHelper = require('../helpers/colorsHelper');
var MovieEditor = require('./MovieEditor.react');
var UIActions = require('../actions/UIActions');

var VelocityComponent = require('velocity-react').VelocityComponent;

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

	getInitialState: function () {
		return {
			showMovieEditor: false
		}
	},

	render: function () {
		return (
			<div className="movie-grid">
				<div><i onClick={this._showMovieEditor} className="material-icons">add_circle</i></div>
				{ this.animationMovieEditor () }
				<div>GRIDS</div>
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