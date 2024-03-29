var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieListingsConstants = require('../constants/MovieListingsConstants');

var MovieListingsActions = {
	addMovie: function (state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.ADD_MOVIE,
			data: state
		});
	},
	updateMovie: function (id,state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.UPDATE_MOVIE,
			movieId: id, data: state
		});
	},
	deleteMovie: function (id) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.DELETE_MOVIE,
			movieId: id
		});
	},
	listMovies: function () {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.LIST_MOVIES
		});
	},
	getMovieInfos: function (id) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.GET_MOVIE_INFOS,
			movieId: id
		});
	}
};

module.exports = MovieListingsActions;