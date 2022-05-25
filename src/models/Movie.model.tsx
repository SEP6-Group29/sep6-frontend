export default class Movie {
  public id: number;
  public title: string;
  public year: number;
  public poster: string;
  //public rating: Rating;??

  constructor(id: number, name: string, year: number, poster: string) {
    this.id = id;
    this.title = name;
    this.year = year;
    this.poster = poster;
  }
}
