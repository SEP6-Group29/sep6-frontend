import axios from "axios";
import Movie from "../models/Movie.model";
import { ALL_MOVIES, MOVIES_BY_NAME, MOVIE_BY_ID } from "../helpers/url";
import { backup_movies } from "../helpers/backup_data";

export default class MovieService {
  public async getAllMovies(): Promise<Movie[]> {
    let movieList: Movie[];
    try {
      const response = await axios.get(ALL_MOVIES); // if it does not work, try with the actual url instead of importing it
      if (response.status !== 200) {
        return backup_movies;
      }

      movieList = response.data;
    } catch (error) {
      console.log(error);
      return [];
    }

    return movieList;
  }

  public async getMoviesByName(name: string): Promise<Movie[]> {
    let movieList: Movie[];

    try {
      const response = await axios.get(MOVIES_BY_NAME + name); // if it does not work, try with the actual url instead of importing it
      if (response.status !== 200) {
        for (var movie in backup_movies) {
          console.log(JSON.parse(movie));
        }
        return backup_movies; // Delete later
      }

      movieList = response.data;
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
      const response = await axios.get(MOVIE_BY_ID + "/" + id); // if it does not work, try with the actual url instead of importing it
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
}
