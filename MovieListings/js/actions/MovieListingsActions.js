var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieListingsConstants = require('../constants/MovieListingsConstants');

var MovieListingsActions = {
	addNewMovie: function (state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_ADD,
			data: state
		});
	},
	updateMovieInfos: function () {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_UPDATE,
			data: "???"
		});
	},
	deleteMovie: function () {
		console.log('this is deleteMovie')
	},

	readme: function () {
		AppDispatcher.dispatch({
			actionType: 'README',
			data: "readme..."
		});
	}
};

module.exports = MovieListingsActions;