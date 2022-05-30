import axios from "axios";
import Movie from "../models/Movie.model";
import {
  ALL_MOVIES,
  MOVIES_BY_NAME,
  MOVIE_BY_ID,
  TOP_MOVIES,
} from "../helpers/url";
import { backup_movies } from "../helpers/backup_data";

export default class MovieService {
  public async getAllMovies(): Promise<Movie[]> {
    let movieList: Movie[];
    try {
      const response = await axios.get(ALL_MOVIES);

      if (response.status !== 200) {
        return backup_movies;
      }

      movieList = response.data;

      // Make a request to get movie poster from OMDB
      movieList.map(async (movie) => {
        let formatTitle = movie.title.replace(" ", "+");
        console.log("Format title: " + formatTitle);
        const omdb_response = await axios.get(
          `http://www.omdbapi.com/?t=${formatTitle}&api_key=${process.env.REACT_APP_OMDB_KEY}`
        );
        movie.title = omdb_response.data.poster;
      });
    } catch (error) {
      console.log(error);
      return [];
    }

    return movieList;
  }

  public async getMoviesByName(name: string): Promise<Movie[]> {
    let movieList: Movie[];

    try {
      const response = await axios.get(MOVIES_BY_NAME + name);
      if (response.status !== 200) {
        for (var movie in backup_movies) {
          console.log(movie);
        }
        return backup_movies; // Delete later
      }

      movieList = response.data;

      // Make a request to get movie poster from OMDB
      movieList.map(async (movie) => {
        let formatTitle = movie.title.replace(" ", "+");
        console.log("Format title: " + formatTitle);
        const omdb_response = await axios.get(
          `http://www.omdbapi.com/?t=${formatTitle}&api_key=${process.env.REACT_APP_OMDB_KEY}`
        );
        movie.title = omdb_response.data.poster;
      });
    } catch (error) {
      console.log(error);
      console.log("FROM getMoviesByName inside catch...");
      for (var movie in backup_movies) {
        console.log(movie);
      }
      return backup_movies;
    }

    console.log(movieList);
    return movieList;
  }

  public async getMovieById(id: number): Promise<Movie | null> {
    let movie: Movie;

    try {
      const response = await axios.get(MOVIE_BY_ID + "/" + id);
      if (response.status !== 200) {
        return backup_movies[6];
      }

      movie = response.data;
    } catch (error) {
      console.log(error);
      return null;
    }

    console.log(movie);
    return movie;
  }

  public async getMoviePoster(id: number): Promise<string | null> {
    let moviePoster: string = "";

    try {
      /* Make call to OMDB or TMDB */
      const response = await axios.get(/*api_url + */ "/ + id");
      if (response.status !== 200) {
        console.log("Poster of movie not found!");
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }

    return moviePoster;
  }

  public async getTopMovies(): Promise<Movie[]> {
    let topMovies: Movie[];
    try {
      const response = await axios.get(TOP_MOVIES);
      if (response.status !== 200) {
        return backup_movies;
      }

      topMovies = response.data;
    } catch (error) {
      console.log(error);
      return [];
    }

    return topMovies;
  }
}
