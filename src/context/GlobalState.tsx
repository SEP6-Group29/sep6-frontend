import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist")!)
    : [], //TODO: Set type to Movie[]
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

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        favourites: state.favourites,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
