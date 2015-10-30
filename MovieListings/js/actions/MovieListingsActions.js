var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieListingsConstants = require('../constants/MovieListingsConstants');

var MovieListingsActions = {
	addNewMovie: function () {
		console.log('this is addNewMovie')
	},
	updateMovieInfos: function () {
		console.log('this is updateMovieInfos')
	},
	deleteMovie: function () {
		console.log('this is deleteMovie')
	}
};

module.exports = MovieListingsActions;