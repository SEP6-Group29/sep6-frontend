import { Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../models/Movie.model";

type MovieProps = {
  movie: Movie;
};

//TODO: Change type to model Movie
const ResultCard = (props: MovieProps) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    addMovieToFavourites,
    watchlist,
    watched,
    favourites,
  } = useContext(GlobalContext);

  // Find movie in different lists to enable/disable buttons
  let storedMovie = watchlist.find((o) => o.id === props.movie.id);
  let storedMovieWatched = watched.find((o) => o.id === props.movie.id);
  let storedMovieFavourites = favourites.find((o) => o.id === props.movie.id);

  // Booleans to enable/disable the buttons
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  const favouriteDisabled = storedMovieFavourites ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {props.movie.poster ? (
          <img
            src={`https://image.tmdb.org./t/p/w200${props.movie.poster}`}
            alt={props.movie.title}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
        <div className="info">
          <div className="header">
            <h3 className="title">{props.movie.title}</h3>
            <h4 className="release-date">
              {props.movie.year /*? movie.year.substring(0, 4) : "-"*/}
            </h4>
          </div>

          <div className="controls">
            {/*TODO: Use Button component from ChackraUI*/}
            {/*<button
              className="button"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(props.movie)}
            >
              Add to Watchlist
        </button>*/}
            <Button
              colorScheme="green"
              size="md"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(props.movie)}
            >
              Add to Watchlist
            </Button>
            {/*<button
              className="button"
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(props.movie)}
            >
              Add to Watched
    </button>*/}
            <Button
              colorScheme="green"
              size="md"
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(props.movie)}
            >
              Add to Watched
            </Button>
            {/*<button
              className="button"
              disabled={favouriteDisabled}
              onClick={() => addMovieToFavourites(props.movie)}
            >
              Add to Favourites
</button>*/}
            <Button
              colorScheme="green"
              size="md"
              disabled={favouriteDisabled}
              onClick={() => addMovieToFavourites(props.movie)}
            >
              Add to Favourites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
