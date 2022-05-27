import React from "react";
import Movie from "../models/Movie.model";
import MovieControls from "./MovieControls";

type MovieProps = {
  movie: Movie;
  type: string;
};

const MovieCard = (props: MovieProps) => {
  console.log("From MovieCard - Favourites - props: " + props);
  return (
    <div className="movie-card">
      <div className="overlay">
        {props.movie.poster ? (
          <img
            src={`https://image.tmdb.org./t/p/w200${props.movie.poster}`}
            alt={props.movie.title}
          />
        ) : (
          <div className="filler-poster"></div>
        )}

        <MovieControls type={props.type} movie={props.movie} />
      </div>
    </div>
  );
};

export default MovieCard;
