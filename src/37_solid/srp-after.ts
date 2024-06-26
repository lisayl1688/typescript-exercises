export {};

class Email {
  public email: string;

  constructor(email: string) {
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
}

class Person {
  public name: string;
  public surname: string;
  public email: string;

  constructor(name: string, surname: string, email: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }

  greet(): void {
    alert('Hi!');
  }
}

// * try = Code aus, der möglicherweise Fehler wirft
// * sonst würde
try {
  const person1Email = new Email('test@gmx.de');
  const person1 = new Person('George', 'Harrison', person1Email.email);
  console.log(person1);
} catch (error) {
  console.error(error);
}

console.log('Wir sind am Ende');
