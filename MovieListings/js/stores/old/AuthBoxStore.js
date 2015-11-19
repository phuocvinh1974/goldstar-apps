var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AuthBoxConstants = require('../constants/AuthBoxConstants');
var assign = require('object-assign');
var colorsHelper = require('../helpers/colorsHelper');
var axios = require('axios');

var CHANGE_EVENT = 'change';

var _auth = {granted: false};

// TODOS

function doSignIn (data, callback)
{

	var errmsg = 'Username or Password must be provided.';

	if (data.username && data.password)
	{
		if (data.username.trim()==='' || data.password.trim()==='')
		{
			_auth.msg = { text: errmsg, color: colorsHelper.RED_500 };
		}
		else
		{
			_auth.msg = { text: 'Working...', color: colorsHelper.LIGHTBLUE_500 }

			axios.post('./php_modules/action_auth-signin.php',
				{ username: data.username, password: data.password }, {responseType: 'json'}
			).then ( function (res) {

				_auth = res.data;

				callback ();
			});
		}
	}
	else
	{
		_auth.msg = { text: errmsg, color: colorsHelper.RED_500 };
	}

	AuthBoxStore.emitChange ();
}

function doSignOut()
{
	_auth = {granted: false};
}

// *** //

var AuthBoxStore = assign({}, EventEmitter.prototype, {

	getChanged: function()
	{
		return _auth;
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
			
			doSignIn (payload.data, function () {
				AuthBoxStore.emitChange ();
			});

		break;

		case AuthBoxConstants.SIGN_OUT:
			
			doSignOut ();
			AuthBoxStore.emitChange ();
			
		break;
	}
});

module.exports = AuthBoxStore;