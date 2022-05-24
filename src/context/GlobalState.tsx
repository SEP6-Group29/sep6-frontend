import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist")!)
    : [], //TODO: Set type to Movie[]
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched")!)
    : [],
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites")!)
    : [], //TODO: Set type to Movie[]
};

// create context
export const GlobalContext = createContext<any>(initialState);

// provider components
export const GlobalProvider = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  const addMovieToFavourites = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITES", payload: movie });
  };

  const removeMovieFromFavourites = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITES", payload: id });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        favourites: state.favourites,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        removeMovieFromWatched,
        addMovieToFavourites,
        removeMovieFromFavourites,
        moveToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
