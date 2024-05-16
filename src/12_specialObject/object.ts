// * Registrierte Kunden
// ? wir legen einen neuen Typ NewCustomer an
// ? mit dem ? können wir optionale Eigenschaften festlegen - das sind Eigenschaften, die man auch beim
// ? Anlegen eines Objekts weglassen kann, ohne dass ein Fehler angezeigt wird
type NewCustomer = { firstName: string; lastName: string; email: string; mobilePhone?: string };

// ? Pflichtfelder im Registrierformular: firstName, lastName, email
// ? Optional kann eine Mobilfunknummer angegeben werden
const customer1: NewCustomer = {
  firstName: 'Franny',
  lastName: 'Salinger',
  email: 'f.salinger@gmx.de',
  mobilePhone: '0178 / 45454454'
};
console.log('Customer 1 firstName: ', customer1.firstName);

// * Kopieren von Objekten
// ! wie auch bei Arrays müssen wir beim Kopieren aufpassen
// ? wir kopieren nur die Referenz (die Adresse) und ändern dadurch auch die Werte im Original, also hier in customer1
const customer2: NewCustomer = customer1;
// customer2.firstName = 'Danny';
// console.log('Customer 2 firstName: ', customer2.firstName);
// console.log('Customer 1 firstName: ', customer1.firstName);

// * es gibt zwei Möglichkeiten, um Objekte sicher zu kopieren: den Spread-Operator und Object.assign
// ? Spread Operator ... - kopieren ohne das Orginalobjekt zu verändern
const realCopyCustomer2: NewCustomer = { ...customer1 };
realCopyCustomer2.firstName = 'Danny';
console.log('Customer 2 firstName: ', realCopyCustomer2.firstName);
console.log('Customer 1 firstName: ', customer1.firstName);

// ? mit Object.assign kopieren ohne das Orginalobjekt zu verändern
const copyCustomer3 = Object.assign({}, customer1);
copyCustomer3.firstName = 'Sunny';
console.log('Customer 3 firstName: ', copyCustomer3.firstName);
console.log('Customer 1 firstName: ', customer1.firstName);

// ? hier bei customer3 haben wir die Eigenschaft mobilePhone weggelassen
// ? das ist möglich, weil wir oben im Type NewCustomer mobilePhone mit einem Fragezeichen versehen haben
// ? dadurch wurde die Eigenschaft optional
const customer3: NewCustomer = {
  firstName: 'Jochen',
  lastName: 'Schweitzer',
  email: 'jochen@schweitzer.com'
};
console.log('Mobile phone of customer 3: ', customer3.mobilePhone);

const customers: NewCustomer[] = [customer1, customer3];
customers.forEach((customer: NewCustomer) => {
  // ? bei optionalen Eigenschaften muss man prüfen, ob die Eigenschaften im Objekt überhaupt vorhanden ist
  // ? mobilePhone kann hier entweder ein string oder undefined (= undefiniert) sein
  // ? nur wenn eine Mobilfunknummer da ist, will ich sie ausgeben
  if (customer.mobilePhone) {
    console.log('Es gibt eine Mobilfunknummer: ', customer.mobilePhone);
  }
});