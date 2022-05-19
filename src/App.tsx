import * as React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import MovieList from "./components/MovieList";

const api_key = "97352ccd"; //omdb api-key

//const api_key = "8cde606940b8d0ad765c51ff2e7a2d91"; //api.themoviedb.org api-key

function App() {
  /*   const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);

    useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []); */
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=starwars&apikey=97352ccd`;
    //const url = " http://www.omdbapi.com/?i=tt3896198&apikey=97352ccd";
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <ChakraProvider theme={theme}>
          <MovieList movies={movies} />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
