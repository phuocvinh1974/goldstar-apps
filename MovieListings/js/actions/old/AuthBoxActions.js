var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthBoxConstants = require('../constants/AuthBoxConstants');

var AuthBoxActions = {
	signIn: function (state) {
		AppDispatcher.dispatch({
			actionType: AuthBoxConstants.SIGN_IN,
			data: state
		});
	},
	signOut: function () {
		AppDispatcher.dispatch({
			actionType: AuthBoxConstants.SIGN_OUT
		});
	}
};

module.exports = AuthBoxActions;