import { Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
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
              <MovieCard movie={movie} type={watched} />;
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
