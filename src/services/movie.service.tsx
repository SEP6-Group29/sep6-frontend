import axios from "axios";
import Movie from "../models/Movie.model";
import {
  ALL_MOVIES,
  MOVIES_BY_NAME,
  MOVIE_BY_ID,
  TOP_MOVIES,
  DECADE_MOVIES,
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

      //poster from OMDB
      /*movieList.map(async (movie) => {
        const movieTitle = await Promise.resolve(
          this.getMoviePoster(movie.title)
        );
        movie.poster = movieTitle;
      });*/
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

      // poster from OMDB

      /* movieList.map(async (movie) => {
        const movieTitle = await Promise.resolve(
          this.getMoviePoster(movie.title)
        );
        movie.poster = movieTitle;
      });*/
    } catch (error) {
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
      /*const moviePoster = await Promise.resolve(
        this.getMoviePoster(movie.title)
      );
      movie.poster = moviePoster;*/
    } catch (error) {
      console.log(error);
      return null;
    }

    return movie;
  }

  public async getMoviePoster(title: string): Promise<string> {
    let moviePoster: string = "";
    let formatTitle = title.replaceAll(" ", "+");
    console.log("Format title: " + formatTitle);

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${formatTitle}&apikey=97352ccd`
      );

      if (response.status !== 200) {
        console.log("Poster of movie not found!");
        return "";
      }

      moviePoster = response.data.Poster;
    } catch (error) {
      console.log(error);
      return "";
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

  public async getMoviesByDecade(decade: number): Promise<Movie[]> {
    let decadeMovies: Movie[];

    try {
      const response = await axios.get(DECADE_MOVIES);
      if (response.status !== 200) {
        return backup_movies;
      }

      decadeMovies = response.data;
    } catch (error) {
      console.log(error);
      return [];
    }

    return decadeMovies;
  }
}
