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
		case UIConstants.SHOW_DRAWER:
			_ui = { which: 'UIDrawer', rect: action.rect }
			UIStore.emitChange();
		break;

		case UIConstants.SHOW_MORE_MENU:
			_ui = { which: 'UIMoreMenu', rect: action.rect }
			UIStore.emitChange();
		break;

		case UIConstants.HIDE_DRAWER:
			_ui = { which: null }
			UIStore.emitChange();
		break;

		case UIConstants.HIDE_MORE_MENU:
			_ui = { which: null }
			UIStore.emitChange();
		break;

		case UIConstants.SHOW_QUICKADD_FORM:
			_ui = { whichModal: 'QuickAddForm' }
			UIStore.emitChange();
		break;

		case UIConstants.HIDE_QUICKADD_FORM:
			_ui = { whichModal: null }
			UIStore.emitChange();
		break
	}
});

module.exports = UIStore;