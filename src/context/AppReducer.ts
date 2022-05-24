export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };

    case "ADD_MOVIE_TO_FAVOURITES":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };

    case "REMOVE_MOVIE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };

    default:
      return state;
  }
};
