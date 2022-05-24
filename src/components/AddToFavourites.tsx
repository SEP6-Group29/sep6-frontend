import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { AddIcon } from "@chakra-ui/icons";
import MovieCard from "./MovieCard";

const AddFavourites = () => {
  const { favourites } = useContext(GlobalContext);
  /* TODO: Change icon to a heart icon*/
  return (
    <>
      {/* <span className="mr-2">Add to Favourites </span>
      <AddIcon w={3} h={3} /> */}

      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Favourite movies</h1>
            <span className="count-pill">
              {favourites.length}
              {favourites.length === 1 ? " Like" : " Likes"}
            </span>
          </div>

          {favourites && favourites.length > 0 ? (
            <div className="movie-grid">
              {favourites.map((movie) => {
                <MovieCard movie={movie} type={favourites} />;
              })}
            </div>
          ) : (
            <h2 className="no-movies">You don't like any movies :(</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default AddFavourites;
