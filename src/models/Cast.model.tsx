import Person from "./Person";

export default class Cast {
  public movie_id: number;
  public person_id: number;
  public person: Person;

  constructor(movie_id: number, person_id: number, person: Person) {
    this.movie_id = movie_id;
    this.person_id = person_id;
    this.person = person;
  }
}
