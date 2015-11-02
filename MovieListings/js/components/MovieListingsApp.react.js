var React = require('react');

var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var UIConstants = require('../constants/UIConstants');
var UIStore = require('../stores/UIStore');

var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');
var MovieListingsStore = require('../stores/MovieListingsStore');

var MovieListingsApp = React.createClass({
	
	whichMenu: function () {
		if (!this.state.uiChanged) return null;

		switch (this.state.uiChanged.which)
		{
			case 'MENU_SHOW_DRAWER':
				return <UIDrawer comm={{mouseContext:this.state.mouseContext}} />;
				break;
			case 'MENU_SHOW_MORE':
				return <UIMoreMenu config={this.state.uiChanged} comm={{mouseContext:this.state.mouseContext}} />;
				break;
			case 'MENU_HIDE_DRAWER':
			case 'MENU_HIDE_MORE':
				return null;
			default:
				return null;
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