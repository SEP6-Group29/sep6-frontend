import React, { useState } from "react";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";
import ResultCard from "./ResultCard";

const Add = () => {
  const movieService: MovieService = new MovieService();

  const [query, setQuery] = useState(""); // For the search input
  /* TODO: Change type to the model Movie */
  const [results, setResults] = useState<Movie[]>([]); // For the movies array
  const [movie, setMovie] = useState({}); // For the movie call to api

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuery(e.target.value);

    movieService.getMoviesByName(query).then((movie) => {
      setMovie(movie);
    });
    /* 
    movieService.getAllMovies().then((res) => {
      setResults(res);
    }); */

    /* fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      }); */
  };

  return (
    <>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie"
                value={query}
                onChange={onChange}
              />
            </div>

            {results && results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
