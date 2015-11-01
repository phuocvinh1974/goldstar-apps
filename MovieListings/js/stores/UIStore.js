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

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	}
});

AppDispatcher.register( function (action) {
	switch (action.actionType)
	{
		case UIConstants.UI_DRAWER_TOGGLE:
			_ui = { which: UIConstants.UI_DRAWER_TOGGLE }
			UIStore.emitChange();
		break;

		case UIConstants.UI_MORE_TOGGLE:
			_ui = { which: UIConstants.UI_MORE_TOGGLE, rect: action.rect }
			UIStore.emitChange();
		break;
	}
});

module.exports = UIStore;