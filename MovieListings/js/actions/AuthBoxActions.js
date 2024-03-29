var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthBoxConstants = require('../constants/AuthBoxConstants');

var AuthBoxActions = {
	signIn: function(username,password)
	{
		AppDispatcher.dispatch({
			actionType: AuthBoxConstants.SIGN_IN,
			username: username,
			password: password
		});
	}
};

module.exports = AuthBoxActions;