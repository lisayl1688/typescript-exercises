
import Owner from '../20_oop/Owner';
import Dog from './Dog';
import Person from './Person';

// * auch bei Objekten gibt es Methoden/Funktionen
const person = {
  firstName: 'Name',
  showInfo: function () {
    console.log('Info');
  }
};

// ! Ich kann showInfo nicht einfach so aufrufen
// showInfo();
// ! Ich kann showInfo nur bei der person aufrufen
person.showInfo();

// * Methoden in Klassen
const snuffysOwner = new Owner('Tony Tomson', 'High Street 33', '545826', 'Portland');
const snuffy = new Dog('Snuffy', 8, snuffysOwner);
snuffy.sleep();
snuffy.bark('waff waff wuff');
console.log(snuffy.isHungry());
snuffy.eat();
snuffy.eat();
snuffy.eat();
snuffy.eat();
snuffy.eat();
console.log(snuffy.isHungry());
snuffy.walk();
// * hier wird die get-Methode/Getter aufgerufen
console.log(snuffy.age);
// * hier wird die set-Methode/Setter aufgerufen
snuffy.age = 9;
// ? ist nach außen nicht sichtbar
//snuffy._age = 10;
console.log(snuffy.age);
// * auch hier würde wird der Getter von age aufgerufen
const humanYears = snuffy.age * 7;
snuffy.age = -3;
console.log('Age after -3 is', snuffy.age);

// ? name
console.log(snuffy.name);
// ? der name wird nur im Konstruktor gesetzt und kann danach nicht mehr geändert werden
// snuffy.name = 'Truffy';

console.log(snuffy.dogInLatin);

// * Person
const person1 = new Person('Zach', 'Zackmann', new Date());
// person1.birthday = new Date();
person1.email = 'asdfasdfsadf';
console.log('person1.email', person1.email);
person1.email = 'zach@gmail.com';
console.log('person1.email', person1.email);
