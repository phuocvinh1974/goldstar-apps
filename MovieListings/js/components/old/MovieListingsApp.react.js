var React = require('react');
var VelocityComponent = require('velocity-react').VelocityComponent;

var AuthBox = require('./AuthBox.react');
var UITopbar = require('./UITopbar.react');
var UIDrawer = require('./UIDrawer.react');
var UIMoreMenu = require('./UIMoreMenu.react');
var MovieGrid = require('./MovieGrid.react');

var AuthBoxStore = require('../stores/AuthBoxStore');
var UIStore = require('../stores/UIStore');

var MovieListingsApp = React.createClass({
	
	whichMenu: function()
	{
		if (!this.state.uiStore) return null;

		if (!this.state.uiStore.whichMenu)
			return null;
		else
		{
			switch (this.state.uiStore.whichMenu)
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
							<UIMoreMenu config={{rect:this.state.uiStore.rect}} comm={{mouseContext:this.state.mouseContext}} />
						</VelocityComponent>
					);
					break;
			}
		}
	},

	componentDidMount: function()
	{
		AuthBoxStore.addChangeListener(this._authOnChange);
		UIStore.addChangeListener(this._uiOnChange);
	},

	getInitialState: function()
	{
		return {
			auth: AuthBoxStore.getChanged(),
			uiStore: UIStore.getChanged(),
			mouseContext: null
		}
	},

	render: function () {

		if (!this.state.auth.granted)
		{
			return (
				<VelocityComponent animation={{rotateY:[0,-90]}} duration={500} runOnMount={true}>
					<AuthBox comm={this.state.auth} />
				</VelocityComponent>
			)
		}
		else
		{
			return (
				<div className="app" onClick={this._handleMouseClick}>
					<UITopbar _title="MOVIE LISTINGS MANAGER" />
					<MovieGrid />
					{this.whichMenu()}
				</div>
			)
		}
	},

	_handleMouseClick: function(e)
	{
		this.setState ({
			mouseContext: {x: e.clientX, y: e.clientY}
		});
	},

	_uiOnChange: function()
	{
		this.setState ({
			uiStore: UIStore.getChanged()
		});
	},

	_authOnChange: function()
	{
		this.setState({
			auth: AuthBoxStore.getChanged()
		});
	}
});

module.exports = MovieListingsApp;