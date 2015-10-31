var AppDispatcher = require('../dispatcher/AppDispatcher');
// var EventEmitter = require('events').EventEmitter;
var MovieListingsConstants = require('../constants/MovieListingsConstants');
// var assign = require('object-assign');

// var MovieListingsStore = {};

AppDispatcher.register( function (action) {
	switch (action.actionType)
	{
		case MovieListingsConstants.MOVIE_ADD:
			console.log(action.data)
			// MovieListingsStore.emitChange();
		break;

		case 'README':
			console.log(action.data)
		break;
	}
});

// module.exports = MovieListingsStore;