import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourites from "./components/AddToFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import Movie from "./models/Movie.model";

const api_key = "97352ccd"; //omdb api-key
//const our_api = "https://movieapp-sep6.azurewebsites.net/api/movienames/1";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState<Movie[]>([]);

  const getMovieRequest = async (searchValue: any) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${api_key}`;
    //const url = " http://www.omdbapi.com/?i=tt3896198&apikey=97352ccd";
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")!
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (currentFavoriteMovies: Movie[]) => {
    localStorage.setItem(
      "react-movie-app-favourites",
      JSON.stringify(currentFavoriteMovies)
    );
  };

  const addFavouriteMovie = (movie: Movie) => {
    let newFavouriteList: Movie[] = [];
    newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);

    console.log(newFavouriteList);
  };

  const removeFavouriteMovie = (movie: Movie) => {
    const newFavouriteList = favourites.filter(
      (favourite: Movie) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            favouriteComponent={AddFavourites}
            handleFavouritesClick={addFavouriteMovie}
          />
        </div>
        <div className="row d-flex align-item-center mt-4 mb-4">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="row">
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;