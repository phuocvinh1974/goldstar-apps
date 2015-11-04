var React = require('react');

var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var UIStore = require('../stores/UIStore');

var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');
var MovieListingsStore = require('../stores/MovieListingsStore');

var VelocityComponent = require('velocity-react').VelocityComponent;

var MovieListingsApp = React.createClass({
	
	whichMenu: function () {
		if (!this.state.uiChanged) return null;

		if (!this.state.uiChanged.which)
			return null;
		else
		{
			switch (this.state.uiChanged.which)
			{
				case 'UIDrawer':
					var comm = {
						mouseContext: this.state.mouseContext,
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
		UIStore.addChangeListener(this._UIonChange);
	},

	getInitialState: function () {
		return {
			uiChanged: UIStore.getChanged(),
			mouseContext: null
		};
	},

	render: function () {
		return (
			<div className="app" onClick={this._handleClick}>
				<UITopbar _title="MOVIE LISTINGS MANAGER" />
				<MovieListingsQuickAdd />
				<MovieListingsGrid />
				{ this.whichMenu() }
			</div>
		);
	},

	_handleClick: function (e) {
		this.setState ({ mouseContext: { x: e.clientX, y: e.clientY } });
	},

	_UIonChange: function () {
		this.setState({ uiChanged: UIStore.getChanged() });
	}
});

module.exports = MovieListingsApp;