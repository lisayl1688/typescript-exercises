class Person {
  // ? ich erlaube nur Kindklassen, die Werte von Vor- und Nachname nachträglich zu ändern, nicht von außen
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
