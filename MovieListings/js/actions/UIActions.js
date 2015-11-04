var AppDispatcher = require('../dispatcher/AppDispatcher');
var UIConstants = require('../constants/UIConstants');

var UIActions = {
	showDrawer: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.SHOW_DRAWER,
			rect: rect
		});
	},
	hideDrawer: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.HIDE_DRAWER,
			rect: rect
		});
	},
	showMoreMenu: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.SHOW_MORE_MENU,
			rect: rect
		});
	},
	hideMoreMenu: function () {
		AppDispatcher.dispatch({
			actionType: UIConstants.HIDE_MORE_MENU
		});
	}
};

module.exports = UIActions;