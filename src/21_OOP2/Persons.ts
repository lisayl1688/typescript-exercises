
class Person {
    firstName: string;
    lastName: string;
    private _email: string = '';
    private _birthday: Date;
  
    // ! in der E-Mail muss ein @-Zeichen enthalten sein
    get email() {
      return this._email;
    }
  
    set email(value: string) {
      if (value.includes('@')) {
        this._email = value;
      } else {
        console.log('Email must include an @');
      }
    }
    // ! mein Wunsch ist, dass der Geburtstag nur einmal über den Konstruktor gesetzt werden und dann nie mehr verändert werden kann
    get birthday() {
      return this._birthday;
    }
  
    constructor(firstName: string, lastName: string, birthday: Date) {
      this.firstName = firstName;
      this.lastName = lastName;
      this._birthday = birthday;
    }
  }
  
  export default Person;
  