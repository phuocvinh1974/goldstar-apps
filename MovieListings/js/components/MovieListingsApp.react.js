var React = require('react');

var MovieListingsApp = React.createClass({
	render: function () {
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<header className="mdl-layout__header">
					<div className="mdl-layout__header-row">
						<span className="mdl-layout-title">Movie Listings</span>
					</div>
				</header>
			</div>
		);
	}
});

module.exports = MovieListingsApp;