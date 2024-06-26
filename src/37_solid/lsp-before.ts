// * Was verstösst in dieser Klasse gegen das Liskov Substitution Prinzip?
class BankAccount {
  constructor(public balance: number) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  private transactionLimit: number = 1000;

  // ! hier wird gegen das Liskov Substitution Prinzip verstossen
  // ! es wird eine eigene Logik (Zeile 22 - 24) eingefügt bevor die "echte" Logik aus der Elternklasse aufgerufen wird
  withdraw(amount: number): void {
    if (amount > this.transactionLimit) {
      throw new Error('Transaction limit exceeded');
    }
    // ? hier wird die Methode withdraw aus der Elternklasse BankAccount aufgerufen
    super.withdraw(amount);
  }
}

const savingsAccount = new SavingsAccount(5000);
try {
  savingsAccount.withdraw(2000);
} catch (error) {
  console.error((error as Error).message);
}
