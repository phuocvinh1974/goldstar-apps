var React = require('react');
var VelocityComponent = require('velocity-react').VelocityComponent;

var AuthBox = require('./AuthBox.react');
var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var MovieGrid = require('./MovieGrid.react');

var AuthBoxStore = require('../stores/AuthBoxStore');
var UIStore = require('../stores/UIStore');
var MovieListingsStore = require('../stores/MovieListingsStore');

var MovieListingsApp = React.createClass({
	
	whichMenu: function () {
		if (!this.state.uiChanged) return null;

		if (!this.state.uiChanged.whichMenu)
			return null;
		else
		{
			switch (this.state.uiChanged.whichMenu)
			{
				case 'UIDrawer':
					var comm = {
						mouseContext: this.state.mouseContext,
						auth: this.state.auth,
						avatarUrl:'url(./img/avatars/cat.jpg)'
					};

					return (
						<VelocityComponent animation={{translateX:[0,-280]}} duration={250} runOnMount={true}>
							<UIDrawer comm={comm} />
						</VelocityComponent>
					);

					break;

				case 'UIMoreMenu':
					return (
						<VelocityComponent animation={{rotateY:[0,-90]}} duration={250} runOnMount={true}>
							<UIMoreMenu config={{rect:this.state.uiChanged.rect}} comm={{mouseContext:this.state.mouseContext}} />
						</VelocityComponent>
					);
					break;
			}
		}
	},

	componentDidMount: function () {
		AuthBoxStore.addChangeListener (this._authOnChange);
		UIStore.addChangeListener (this._uiOnChange);
		MovieListingsStore.addChangeListener(this._movielistingsOnChange);
	},

	getInitialState: function () {
		return {
			auth: AuthBoxStore.getChanged(),
			uiChanged: UIStore.getChanged(),
			movieListings: MovieListingsStore.getChanged(),
			mouseContext: null
		};
	},

	render: function () {

		if (!this.state.auth.granted)
		{
			return (
				<VelocityComponent animation={{rotateY:[0,-90]}} duration={500} runOnMount={true}>
					<AuthBox comm={this.state.auth} />
				</VelocityComponent>
			);
		}
		else
		{
			return (
				<div className="app" onClick={this._handleClick}>
					<UITopbar _title="MOVIE LISTINGS MANAGER" />
					<MovieGrid listOfMovies={this.state.movieListings.movies} />
					{ this.whichMenu () }
				</div>
			);
		}
	},

	_handleClick: function (e) {
		this.setState ({ mouseContext: { x: e.clientX, y: e.clientY } });
	},

	_uiOnChange: function () {
		this.setState ({ uiChanged: UIStore.getChanged() });
	},

	_movielistingsOnChange: function () {
		this.setState ({ movieListings: MovieListingsStore.getChanged() });
	},

	_authOnChange: function () {
		this.setState ({ auth: AuthBoxStore.getChanged() });
	}
});

module.exports = MovieListingsApp;