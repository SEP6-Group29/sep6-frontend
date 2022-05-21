export default class Movie {
  public movieId: number;
  public movieName: string;
  public year: number;
  public poster: string;

  constructor(
    movieId: number,
    movieName: string,
    year: number,
    poster: string
  ) {
    this.movieId = movieId;
    this.movieName = movieName;
    this.year = year;
    this.poster = poster;
  }
}
