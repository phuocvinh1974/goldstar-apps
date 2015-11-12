var React = require('react');

var UIActions = require('../actions/UIActions');

var colorsHelper = require('../helpers/colorsHelper');

var MoviesGrid = React.createClass({
	render: function () {
		return (
			<div className="movie-listings-grid">
				<i onClick={this._showQuickAddForm} className="material-icons" style={{fontSize:'32pt !important',color:colorsHelper.PINK_100,cursor:'pointer'}}>add_circle</i>
				<div>GRIDS</div>
			</div>
		);
	},

	_showQuickAddForm: function () {
		UIActions.showQuickAddForm ();
	}
});

module.exports = MoviesGrid;