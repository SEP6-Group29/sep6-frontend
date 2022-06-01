export default class Rating {
  public movie_id: number;
  public value: number;
  public votes: number;

  constructor(movie_id: number, value: number, votes: number) {
    this.movie_id = movie_id;
    this.value = value;
    this.votes = votes;
  }
}

/*"rating": {
    "movie_id": 113419,
    "value": 6.0,
    "votes": 25712
}*/
