var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var UIConstants = require('../constants/UIConstants');

var CHANGE_EVENT = 'change';

var _ui = null;

var UIStore = assign({}, EventEmitter.prototype, {

	getChanged: function () {
		return _ui;
	},
	
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	}
});

AppDispatcher.register( function (action) {
	switch (action.actionType)
	{
		case UIConstants.MENU_SHOW_DRAWER:
			_ui = { which: UIConstants.MENU_SHOW_DRAWER }
			UIStore.emitChange();
		break;

		case UIConstants.MENU_SHOW_MORE:
			_ui = { which: UIConstants.MENU_SHOW_MORE, rect: action.rect }
			UIStore.emitChange();
		break;

		case UIConstants.MENU_HIDE_MORE:
			_ui = { which: UIConstants.MENU_HIDE_MORE }
			UIStore.emitChange();
		break;
	}
});

module.exports = UIStore;