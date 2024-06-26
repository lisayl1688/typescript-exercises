export {};

// * Was verstösst in dieser Klasse gegen das Single Responsibility Prinzip?
class Person {
  public name: string;
  public surname: string;
  public email: string;

  constructor(name: string, surname: string, email: string) {
    this.name = name;
    this.surname = surname;
    // ! validate Email vestösst gegen das Single Responsibility Prinzip
    // ! die eigentliche Aufgabe von Person ist Personendaten zu verwalten
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error('Invalid email!');
    }
  }

  validateEmail(email: string): boolean {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  greet(): void {
    alert('Hi!');
  }
}
