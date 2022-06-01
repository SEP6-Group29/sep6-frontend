import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    addMovieToFavourites,
    removeMovieFromFavourites,
    moveToWatchlist,
    removeMovieFromWatched,
  } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <Button
            className="ctrl-button"
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </Button>

          <Button
            className="ctrl-button"
            onClick={removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw far fa-times"></i>
          </Button>

          <Button
            className="ctrl-button"
            onClick={addMovieToFavourites(movie.id)}
          >
            <i className="fas fa-heart"></i>
          </Button>
        </>
      )}

      {type === "watched" && (
        <>
          <Button
            className="ctrl-button"
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </Button>

          <Button
            className="ctrl-button"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <i className="fa-fw far fa-times"></i>
          </Button>

          <Button
            className="ctrl-button"
            onClick={addMovieToFavourites(movie.id)}
          >
            <i className="fas fa-heart"></i>
          </Button>
        </>
      )}

      {type === "favourites" && (
        <>
          <Button
            className="ctrl-button"
            onClick={removeMovieFromFavourites(movie.id)}
          >
            <i className="fa-fw far fa-times"></i>
          </Button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
