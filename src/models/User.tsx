export default class User {
    public id: number;
    public username: string;
    public password: string;
    public emailAddress: string;
    
  
    constructor(
      id: number,
      username: string,
      password: string,
      emailAddress: string,
      
    ) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.emailAddress = emailAddress;
      
    }
  }
  