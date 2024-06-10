export {};
import User from './User';
import IUser from './contracts/IUser';

console.log('registration.ts');

const allUsers: IUser[] = [];

// * alle Elemente holen
const registrationForm = document.getElementById('registration-form');
const firstNameInput = document.getElementById('firstname-input') as HTMLInputElement;
const lastNameInput = document.getElementById('lastname-input') as HTMLInputElement;
const emailInput = document.getElementById('email-input') as HTMLInputElement;
const phoneInput = document.getElementById('phone-input') as HTMLInputElement;

// * Event Handler für Klick
// ? weil der Button mit type submit in der Form steckt, hänge ich mich nicht an button.click
// ? sondern an form.submit
registrationForm?.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const newUser = createUser(firstNameInput.value, lastNameInput.value, emailInput.value, phoneInput.value);
  allUsers.push(newUser);
  console.log(allUsers);
});

// * als Rückgabetyp kann ich sowohl IUser als auch User nehmen
// * weil User IUser implementiert
function createUser(firstName: string, lastName: string, email: string, phone: string): User {
  const newUser = new User();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;
  newUser.phone = phone;
  return newUser;
}
