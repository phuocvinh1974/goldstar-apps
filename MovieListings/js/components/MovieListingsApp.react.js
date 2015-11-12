var React = require('react');

var AuthBox = require('./AuthBox.react');
var AuthBoxStore = require('../stores/AuthBoxStore');

var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var UIStore = require('../stores/UIStore');

var QuickAddForm = require('./QuickAddForm.react');
var MoviesGrid = require('./MoviesGrid.react');
var MovieListingsStore = require('../stores/MovieListingsStore');

var VelocityComponent = require('velocity-react').VelocityComponent;

var MovieListingsApp = React.createClass({

	whichModal: function () {
		console.log('modal show')
	},
	
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
		UIStore.addChangeListener (this._UIonChange);
		AuthBoxStore.addChangeListener (this._authOnChange);
	},

	getInitialState: function () {
		return {
			auth: AuthBoxStore.getChanged(),
			uiChanged: UIStore.getChanged(),
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
					<MoviesGrid />
					{ this.whichMenu () }
					{ this.whichModal () }
				</div>
			);
		}
	},

	_handleClick: function (e) {
		this.setState ({ mouseContext: { x: e.clientX, y: e.clientY } });
	},

	_UIonChange: function () {
		this.setState({ uiChanged: UIStore.getChanged() });
	},

	_authOnChange: function () {
		this.setState ({ auth: AuthBoxStore.getChanged() });
	}
});

module.exports = MovieListingsApp;