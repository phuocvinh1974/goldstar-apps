var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthBoxConstants = require('../constants/AuthBoxConstants');
var colorsHelper = require('../helpers/colorsHelper');
var axios = require('axios');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var _store = {};

function signIn(username, password)
{
	axios.post('./php_modules/action_auth-signin.php',
		{
			username: username,
			password: password
		}
	).then(function(res) {

		_store = {
			granted: res.data.granted,
			msg: res.data.msg
		};

		AuthBoxStore.emitChange();
	});
}

var AuthBoxStore = assign({}, EventEmitter.prototype, {

	getAuth: function()
	{
		return _store;
	},

	addChangeListener: function(callback)
	{
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback)
	{
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function()
	{
		this.emit(CHANGE_EVENT);
	}
});

AppDispatcher.register(function(payload) {
	switch (payload.actionType)
	{
		case AuthBoxConstants.SIGN_IN:
			signIn(payload.username, payload.password);
		break;
	}
});

module.exports = AuthBoxStore;