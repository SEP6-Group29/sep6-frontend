import axios from "axios";
import Movie from "../models/Movie.model";
import { ALL_MOVIES, MOVIES_BY_NAME, MOVIE_BY_ID } from "../helpers/url";

export default class MovieService {
  public async getAllMovies(): Promise<Movie[]> {
    let movieList: Movie[];
    try {
      const response = await axios.get(ALL_MOVIES); // if it does not work, try with the actual url instead of importing it
      if (response.status !== 200) {
        return [];
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
        return [];
      }

      movieList = response.data;
    } catch (error) {
      console.log(error);
      return [];
    }

    return movieList;
  }

  public async getMovieById(id: number): Promise<Movie | null> {
    let movie: Movie;

    try {
      const response = await axios.get(MOVIE_BY_ID + "/" + id); // if it does not work, try with the actual url instead of importing it
      if (response.status !== 200) {
        return null;
      }

      movie = response.data;
    } catch (error) {
      console.log(error);
      return null;
    }

    return movie;
  }
}
