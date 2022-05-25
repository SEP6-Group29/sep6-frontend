export default class Person {
  public id: number;
  public name: string;
  public birth: number;

  constructor(id: number, name: string, birth: number) {
    this.id = id;
    this.name = name;
    this.birth = birth;
  }
}
