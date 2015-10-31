var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieListingsConstants = require('../constants/MovieListingsConstants');

var MovieListingsActions = {
	addNewMovie: function (state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_ADD,
			data: state
		});
	},
	updateMovieInfos: function (id,state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_UPDATE,
			movieId: id,
			data: state
		});
	},
	deleteMovie: function (id) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_DELETE,
			movieId: id
		});
	}
};

module.exports = MovieListingsActions;