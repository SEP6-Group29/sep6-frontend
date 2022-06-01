import Person from "./Person";
import Rating from "./Rating.model";

export default class Movie {
  public id: number | undefined;
  public title: string | undefined;
  public year: number | undefined;
  public poster: string | undefined;
  public rating: number | undefined;
  public directors?: Person[];
  public ratingVotes?: Rating;
  public stars?: Person[];

  /*"rating": {
    "movie_id": 113419,
    "value": 6.0,
    "votes": 25712
}

"stars": [
        {
            "movie_id": 113419,
            "person_id": 1080,
            "person": {
                "id": 1080,
                "name": "Lindsay Crouse",
                "birth": 1948.0
            }
        }
    ],

  "directors": [
    {
        "movie_id": 113419,
        "person_id": 568,
        "person": {
            "id": 568,
            "name": "Frank Oz",
            "birth": 1944.0
        }
    }*/

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
