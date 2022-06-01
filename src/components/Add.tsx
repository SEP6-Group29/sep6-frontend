import React, { useState } from "react";
import Movie from "../models/Movie.model";
import MovieService from "../services/movie.service";
import ResultCard from "./ResultCard";

const Add = () => {
  const movieService: MovieService = new MovieService();

  const [query, setQuery] = useState(""); // For the search input
  const [results, setResults] = useState<Movie[]>([]); // For the movies array

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuery(e.target.value);

    movieService.getMoviesByName(query).then((movies) => {
      let myMovies: Movie[] = movies;
      setResults(myMovies);
    });
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
