var AppDispatcher = require('../dispatcher/AppDispatcher');
var UIConstants = require('../constants/UIConstants');

var UIActions = {
	showDrawer: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.SHOW_DRAWER
		});
	},
	hideDrawer: function () {
		AppDispatcher.dispatch({
			actionType: UIConstants.HIDE_DRAWER
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
	},

	showQuickAddForm: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.SHOW_QUICKADD_FORM,
			rect: rect
		});
	},
	hideQuickAddForm: function () {
		AppDispatcher.dispatch({
			actionType: UIConstants.HIDE_QUICKADD_FORM
		});
	}
};

module.exports = UIActions;