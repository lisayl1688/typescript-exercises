export {};

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

  constructor(balance: number) {
    super(balance);
  }
  canWithdraw(amount: number): boolean {
    const canWithdraw = amount <= this.transactionLimit;
    return canWithdraw;
  }
}

const savingsAccount = new SavingsAccount(5000);
if (savingsAccount.canWithdraw(2000)) {
  savingsAccount.withdraw(2000);
}
