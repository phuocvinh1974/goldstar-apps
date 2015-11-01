var AppDispatcher = require('../dispatcher/AppDispatcher');
var UIConstants = require('../constants/UIConstants');

var UIActions = {
	menuDrawerToggle: function () {
		AppDispatcher.dispatch({
			actionType: UIConstants.UI_DRAWER_TOGGLE
		});
	},
	menuMoreToggle: function (rect) {
		AppDispatcher.dispatch({
			actionType: UIConstants.UI_MORE_TOGGLE,
			data: rect
		});
	}
};

module.exports = UIActions;