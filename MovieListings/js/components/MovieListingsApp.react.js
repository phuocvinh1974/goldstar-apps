var React = require('react');

var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var UIStore = require('../stores/UIStore');

var MovieListingsQuickAdd = require('./MovieListingsQuickAdd.react');
var MovieListingsGrid = require('./MovieListingsGrid.react');
var MovieListingsStore = require('../stores/MovieListingsStore');

var MovieListingsApp = React.createClass({

	componentDidMount: function () {
		UIStore.addChangeListener(this._UIonChange);
	},

	getInitialState: function () {
		return {
			uiChanged: UIStore.getChanged()
		};
	},

	render: function () {
		
		var whichMenu = function () {
			if (!this.state.uiChanged) return null;

			switch (this.state.uiChanged.which)
			{
				case 'UI_DRAWER_TOGGLE': return <UIDrawer />; break;
				case 'UI_MORE_TOGGLE': return <UIMoreMenu />; break;
				default: return null;
			}
		}.bind(this)

		return (
			<div className="app" onClick={this._handleClick}>
				<UITopbar _title="MOVIE LISTINGS MANAGER" />
				<MovieListingsQuickAdd />
				<MovieListingsGrid />
				{ whichMenu() }
			</div>
		);
	},

	_handleClick: function (e) {
		if (e.target.className!=='material-icons')
			this.setState({ uiChanged: null })
	},

	_UIonChange: function () {
		this.setState({ uiChanged: UIStore.getChanged() });
	}
});

module.exports = MovieListingsApp;