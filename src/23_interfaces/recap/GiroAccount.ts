import BankAccount from './BankAccount';

class GiroAccount extends BankAccount {
  // ? zusätzliche Eigenschaft nur in der Klasse GiroAccount
  private overdraftLimit: number = 250;

  constructor(number: number, owner: string) {
    // * Aufruf von Konstruktor der Basisklasse
    // ? ich kann hier auch feste Werte wie 0 übergeben
    const cleanedOwner = owner.replace(' ', '');
    super(number, cleanedOwner, 0);
  }

  withdraw(amount: number) {
    if (amount) {
      // ? abzuhebender Betrag < Kontostand + Überziehungslimit
      if (amount <= this._balance + this.overdraftLimit) {
        this._balance -= amount;
      } else {
        console.error(`Limit exceeded. Your current balance is ${this._balance}`);
      }
    } else {
      console.error('No amount given');
    }
  }
}

export default GiroAccount;
