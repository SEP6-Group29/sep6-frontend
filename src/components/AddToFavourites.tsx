import { Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "../models/Movie.model";
import MovieCard from "./MovieCard";

const AddFavourites = () => {
  const { favourites } = useContext(GlobalContext);
  console.log(favourites);

  // Make a request to get movie poster from OMDB
  /*favourites.map(async (movie) => {
    let formatTitle = movie.title.replace(" ", "+");
    console.log("Format title: " + formatTitle);
    const omdb_response = await axios.get(
      `http://www.omdbapi.com/?t=${formatTitle}&api_key=${process.env.REACT_APP_OMDB_KEY}`
    );
    movie.title = omdb_response.data.poster;
    movie.rating = omdb_response.data.rating;
  });*/

  return (
    <>
      <div className="movie-page">
        <div className="container">
          <div className="header">
            {/*<h1 className="heading">Favourite movies</h1>*/}
            <Heading noOfLines={1}>
              Favourites
              <svg
                stroke="currentColor"
                fill="red"
                stroke-width="0"
                viewBox="0 0 512 512"
                focusable="false"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
              </svg>
            </Heading>
            <span className="count-pill">
              {favourites.length}
              {favourites.length === 1 ? " Like" : " Likes"}
            </span>
          </div>

          {favourites.length > 0 ? (
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              {favourites.map((movie: Movie) => {
                return <MovieCard movie={movie} type={favourites} />;
              })}
            </Grid>
          ) : (
            <h2 className="no-movies">You don't like any movies :(</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default AddFavourites;
