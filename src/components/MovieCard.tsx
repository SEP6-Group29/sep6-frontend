import React from "react";
import Movie from "../models/Movie.model";
import MovieControls from "./MovieControls";

type MovieProps = {
  movie: Movie;
  type: string;
};

const MovieCard = (props: MovieProps) => {
  console.log(
    "From MovieCard - Favourites - props title: " +
      props.movie.title +
      "...and type: " +
      props.type
  );
  return (
    <div className="movie-card">
      <div className="overlay">
        {props.movie.poster ? (
          <>
            <img src={props.movie.poster} alt={props.movie.title} />
            <span>{props.movie.title}</span>
          </>
        ) : (
          <div className="filler-poster">Movie has no poster</div>
        )}

        <MovieControls type={props.type} movie={props.movie} />
      </div>
    </div>
  );
};

export default MovieCard;
