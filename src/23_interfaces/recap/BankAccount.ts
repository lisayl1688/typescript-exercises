// class BankAccount {
//   public number: number = 0;
//   public owner: string = '';
//   public balance: number = 0;

//   constructor(number: number, owner: string, balance: number) {
//     this.number = number;
//     this.owner = owner;
//     this.balance = balance;
//   }
// }

class BankAccount {
  // * Kurzschreibweise - macht genau das Gleiche wie oben
  // ? sobald vor einem Konstruktorparameter public, protected or private steht, wird automatisch
  // ? eine Eigenschaft in der Klasse mit diesem Namen angelegt
  // ? das this._ = wert passiert im Hintergrund automatisch
  // ? bei mehr als 4 Parameter eher schlechter lesbar, nicht so empfehlenswert

  // ? der Getter braucht immer einen anderen Namen als die interne, private Eigenschaft haben
  // ? kann von außen eingesehen werden, aber nicht geändert - schreibgeschützt/readonly
  get balance(): number {
    return this._balance;
  }

  // ? durch protected _balance kann ich dann auch in der GiroAccount darauf zugreifen
  constructor(private number: number, private owner: string, protected _balance: number) {}

  public deposit(amount: number) {
    if (amount) {
      this._balance += amount;
    } else {
      console.error('No amount given');
    }
  }

  public withdraw(amount: number) {
    if (amount) {
      // ? ist genug Geld auf dem Konto?
      if (amount < this._balance) {
        // this.balance = this.balance - amount;
        // ? Kurzschreibweise: vom Guthaben wird der Betrag abgezogen
        this._balance -= amount;
      } else {
        // ? auf die internen Eigenschaften/Methoden immer mit this davor, sonst denkt
        // ? der Compiler es wäre eine normale Variable in der dieser Methode
        console.error(`Limit exceeded. Your current balance is ${this._balance}`);
      }
    } else {
      console.error('No amount given');
    }
  }
}

export default BankAccount;
