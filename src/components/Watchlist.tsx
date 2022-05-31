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
  const movieService: MovieService = new MovieService();
  console.log("FROM WATCHLIST: " + watchlist);

  // Make a request to get movie poster from OMDB
  /*watchlist.map(async (movie) => {
    let formatTitle = movie.title.replace(" ", "+");
    console.log("Format title: " + formatTitle);
    const omdb_response = await axios.get(
      `http://www.omdbapi.com/?t=${formatTitle}&api_key=97352ccd`
    );
    movie.title = omdb_response.data.poster;
    movie.rating = omdb_response.data.rating;
  });*/
  useEffect(() => {
    watchlist.map((movie) => {
      movieService.getMoviePoster(movie.title);
    });
  }, watchlist);
  console.log("WATCHLIST: " + watchlist);

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
