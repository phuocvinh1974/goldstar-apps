var AppDispatcher = require('../dispatcher/AppDispatcher');
var UIConstants = require('../constants/UIConstants');

var UIActions = {
	menuShowDrawer: function () {
		AppDispatcher.dispatch({
			actionType: UIConstants.MENU_SHOW_DRAWER
		});
	},
	menuShowMore: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.MENU_SHOW_MORE,
			rect: rect
		});
	},
	menuHideMore: function () {
		AppDispatcher.dispatch({
			actionType: UIConstants.MENU_HIDE_MORE
		});
	}
};

module.exports = UIActions;