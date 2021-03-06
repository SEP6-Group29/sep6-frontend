import { Button } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../models/Movie.model";

type MovieProps = {
  movie: Movie;
  type?: string;
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

  /* const image = fetch(
    `https://movieapp-sep6.azurewebsites.net/api/movienames/top/8`
  )
    .then((res) => res.json())
    .then((data) => (data));*/

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {props.movie.poster ? (
          <img src={props.movie.poster} alt={props.movie.title} />
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
            <Button
              colorScheme="green"
              size="md"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(props.movie)}
            >
              Add to Watchlist
            </Button>
            <Button
              colorScheme="green"
              size="md"
              disabled={watchedDisabled}
              onClick={() => addMovieToWatched(props.movie)}
            >
              Add to Watched
            </Button>
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
