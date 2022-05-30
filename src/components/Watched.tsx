import { Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  console.log("FROM WATCHED: " + watched);

  useEffect(() => {
    // Make a request to get movie poster from OMDB
    watched.map(async (movie) => {
      let formatTitle = movie.title.replace(" ", "+");
      console.log("Format title: " + formatTitle);
      const omdb_response = await axios.get(
        `http://www.omdbapi.com/?t=${formatTitle}&api_key=${process.env.REACT_APP_OMDB_KEY}`
      );
      movie.title = omdb_response.data.poster;
      movie.rating = omdb_response.data.rating;
    });
  });

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          {/*<h1 className="heading">Watched movies</h1>*/}
          <Heading>Watched</Heading>
          <span className="count-pill">
            {watched.length}
            {watched.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>

        {watched && watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => {
              return <MovieCard movie={movie} type={watched} />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watched list :(</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
