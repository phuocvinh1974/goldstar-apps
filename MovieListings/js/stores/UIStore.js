var AppDispatcher = require('../dispatcher/AppDispatcher');
var UIConstants = require('../constants/UIConstants');

var UIStore = {};

AppDispatcher.register( function (action) {
	switch (action.actionType)
	{
		case UIConstants.UI_DRAWER_TOGGLE:
			console.log ('draw')
		break;

		case UIConstants.UI_MORE_TOGGLE:
			console.log ('more')
		break;
	}
});

module.exports = UIStore;