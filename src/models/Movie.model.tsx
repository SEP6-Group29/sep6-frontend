import Cast from "./Cast.model";
import Rating from "./Rating.model";

export default class Movie {
  public id: number;
  public title: string;
  public year: number;
  public poster: string;
  public rating: number;
  public directors?: Cast[];
  public ratingVotes?: Rating;
  public stars?: Cast[];

  constructor(
    id: number,
    name: string,
    year: number,
    poster: string,
    rating: number,
    directors: Cast[],
    ratingVotes: Rating,
    stars: Cast[]
  ) {
    this.id = id;
    this.title = name;
    this.year = year;
    this.poster = poster;
    this.rating = rating;
    this.directors = directors;
    this.ratingVotes = ratingVotes;
    this.stars = stars;
  }
}
