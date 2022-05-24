import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org./t/p/w200${movie.poster_path}`}
            alt={movie.movieName}
          />
        ) : (
          <div className="filler-poster"></div>
        )}

        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
