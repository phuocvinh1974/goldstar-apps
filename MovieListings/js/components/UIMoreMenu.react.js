var React = require('react');

var UIMoreMenu = React.createClass({
	render: function () {

		if (this.props.show)
		{
			return <div>:::MoreMenu:::</div>;
		}
		else
		{
			return null;
		}
	}
});

module.exports = UIMoreMenu;