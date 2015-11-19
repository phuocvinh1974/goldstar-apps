var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthBoxConstants = require('../constants/AuthBoxConstants');
var axios = require('axios');

var AuthBoxStore = {};

function signIn(username,password)
{
	axios.post('./php_modules/action_auth-signin.php', {username: username, password: password}).then();
}

AppDispatcher.register(function(payload) {
	switch (payload.actionType)
	{
		case AuthBoxConstants.SIGN_IN:
			signIn(payload.username, payload.password);
		break;
	}
});

module.exports = AuthBoxStore;