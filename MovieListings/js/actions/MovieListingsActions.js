var AppDispatcher = require('../dispatcher/AppDispatcher');
var MovieListingsConstants = require('../constants/MovieListingsConstants');

var MovieListingsActions = {
	movieAdd: function (state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_ADD,
			data: state
		});
	},
	movieUpdate: function (id,state) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_UPDATE,
			movieId: id,
			data: state
		});
	},
	movieDelete: function (id) {
		AppDispatcher.dispatch({
			actionType: MovieListingsConstants.MOVIE_DELETE,
			movieId: id
		});
	}
};

module.exports = MovieListingsActions;