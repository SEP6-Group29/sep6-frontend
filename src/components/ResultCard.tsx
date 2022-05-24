import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
//import Movie from "../models/Movie.model";

//TODO: Change type to model Movie
const ResultCard = (movie: any) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org./t/p/w200${movie.poster_path}`}
            alt={movie.movieName}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
          </div>

          <div className="controls">
            {/*TODO: Use Button component from ChackraUI*/}
            <button
              className="button"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to Watchlist
            </button>
            <button className="button">Add to Favourites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
