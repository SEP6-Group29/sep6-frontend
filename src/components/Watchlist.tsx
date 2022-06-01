import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";
import movieService from "../services/movie.service";
import MovieCard from "./MovieCard";
import Watched from "./Watched";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  console.log("FROM WATCHLIST: " + watchlist);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <Heading>Watchlist</Heading>
          <span className="count-pill">
            {watchlist.length}
            {watchlist.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie: Movie) => {
              return (
                <MovieCard key={movie.id} movie={movie} type={watchlist} />
              );
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watchlist :(</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
