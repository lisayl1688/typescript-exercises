// ? Employee erbt von der Basisklasse/Elternklasse Person
class Employee extends Person {
  // ? isMarried ist eine zusätzliche Eigenschaft, die nur Employee hat
  public isMarried: boolean = false;
  constructor(firstName: string, lastName: string) {
    // ? hier rufe ich wieder über super den Konstruktor der Basisklasse Person auf
    super(firstName, lastName);
  }

  // ? diese Methode gibt es nur hier in der Klasse Employee
  public setMarriedStatus(newLastName?: string) {
    this.isMarried = true;
    if (newLastName) {
      // ? ich kann den Nachnamen nur ändern, weil ich in der Kindklasse von Person bin und lastName dort protected ist
      this.lastName = newLastName;
    }
  }
}
