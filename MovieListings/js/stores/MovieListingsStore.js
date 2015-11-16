var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var axios = require('axios');
var MovieListingsConstants = require('../constants/MovieListingsConstants');

function addMovie (data, callback) {
	axios.post('./php_modules/action_movie-add.php', data).then( function (res) {
		callback (res.data);
	});
}

function updateMovie () {

}

function deleteMovie () {

}

function listMovies (callback) {
	axios.post('./php_modules/action_list-movies.php').then( function (res) {
		callback (res.data)
	});
}

var _movielistings = {};

var MovieListingsStore = assign({}, EventEmitter.prototype, {

	getChanged: function () {
		return _movielistings;
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

AppDispatcher.register( function (payload) {
	switch (payload.actionType)
	{
		case MovieListingsConstants.ADD_MOVIE:
			addMovie (payload.data, function(res) {
				if (res.success)
				{
					console.log ('movie added!');
				}
			});
		break;

		case MovieListingsConstants.UPDATE_MOVIE:
			updateMovie ();
		break;

		case MovieListingsConstants.DELETE_MOVIE:
			deleteMovie ();
		break;

		case MovieListingsConstants.LIST_MOVIES:
			listMovies ();
		break;
	}
});

module.exports = MovieListingsStore;