export default class Movie {
  public id: number;
  public title: string;
  public year: number;
  public poster: string;
  public rating: number;

  constructor(
    id: number,
    name: string,
    year: number,
    poster: string,
    rating: number
  ) {
    this.id = id;
    this.title = name;
    this.year = year;
    this.poster = poster;
    this.rating = rating;
  }
}
