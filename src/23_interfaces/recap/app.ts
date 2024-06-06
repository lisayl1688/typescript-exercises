import BankAccount from './BankAccount';
import GiroAccount from './GiroAccount';

const newBankAccount = new BankAccount(78956522, 'Frank Frog', 0);
console.log(newBankAccount);

newBankAccount.deposit(582);
console.log(newBankAccount.balance);

newBankAccount.withdraw(322);
console.log(newBankAccount.balance);

newBankAccount.withdraw(1000);
console.log(newBankAccount.balance);

const newGiroAccount = new GiroAccount(34343434, 'Mary May');
newGiroAccount.deposit(300);
console.log(newGiroAccount.balance);

newGiroAccount.withdraw(600);
console.log(newGiroAccount.balance);

newGiroAccount.withdraw(550);
console.log(newGiroAccount.balance);
