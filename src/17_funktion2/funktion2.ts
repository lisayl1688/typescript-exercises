
console.log('functions2');

// * normalen Standardfunctions beginnen mit dem function Keyword
function sayHelloToEveryone(): void {
  console.log('Hello everyone');
}

// * Aufruf ist immer mit runden Klammern und ggf. Parameterwerten
sayHelloToEveryone();

// * Arrow-Functions
// ? Eventlistener
// ? hier ist die Arrowfunction eine Funktion ohne Namen (= anonyme Funktion)
// ? macht das das Gleiche wie eine normale Funktion
// ? hat die selben Elemente: runde Klammern für Parameter, dann immer der Fat-Arrow (Doppelpfeil), immer die
// ? geschweiften Klammern mit der eigentlichen Logik
document.getElementById('something')?.addEventListener('click', () => {
  console.log('hello');
});

// ? Array-Methoden
const sexAndTheCityPeople: string[] = ['Carrie', 'Charlotte', 'Miranda', 'Samantha', 'Mr. Big'];
// ? Arrow Function bei Arrays immer: runde Klammern, Fat-Arrow, geschweifte Klammern
sexAndTheCityPeople.forEach(() => {});
// ? ein Element des Arrays wird reingegeben in die Logik
sexAndTheCityPeople.forEach((name: string) => {
  console.log(name);
});
// ? Ergebnis von map ist immer ein neues Array
const sexAndTheCityGreetings = sexAndTheCityPeople.map((name: string) => {
  return 'Hi ' + name;
});
console.log(sexAndTheCityGreetings);

// * wenn die Logik nur aus einer Zeile/einer Anweisung besteht können wir die Schreibweise verkürzen
// ? hier kann ich die geschweiften Klammern weglassen, alles steht in einer Zeile
sexAndTheCityPeople.forEach((name) => console.log(name));
// ? ich kann sogar das return weglassen, wenn es nur eine Zeile ist
const sexAndTheCityGreeting2 = sexAndTheCityPeople.map((name) => 'Hi ' + name);

// ? beim sort immer zwei Parameter - weil jeweils zwei Elemente miteinander verglichen werden
sexAndTheCityPeople.sort((a: string, b: string) => {
  return a.localeCompare(b);
});
// ? Kurzschreibweise ohne geschweifte Klammern und return
sexAndTheCityPeople.sort((a: string, b: string) => a.localeCompare(b));

// * Arrow-Functions mit Namen
function addTwoNumbers(a: number, b: number): number {
  return a + b;
}
addTwoNumbers(3, 4);
// ? das kann ich auch als Arrow-Function schreiben
// ? ich schreibe eine anonyme Funktion und weise sie einer Variablen zu, dadurch kann ich darauf zugreifen / sie aufrufen
const addTwoNumbersArrow = (a: number, b: number): number => {
  return a + b;
};

addTwoNumbersArrow(44, 33);

// * Optionale Parameter in einer Funktion
//addTwoNumbers(3) wirft ein Fehler: zwei Argumente/Parameter erwartet
// ? der dritte Parameter soll optional sein - a und b immer angeben, c kann weglassen werden
function addNumbers(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c;
  }
  return a + b;
}

console.log(addNumbers(4, 5));
console.log(addNumbers(5, 6, 7));

// ? hier muss mindestens der Vorname angegeben werden, der Nachname ist optional (kann angegeben werden oder nicht)
function showUserGreeting(firstName: string, lastName?: string) {
  if (lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
  } else {
    console.log(`Hello ${firstName}`);
  }
}

showUserGreeting('Suzy');
showUserGreeting('Lucy', 'Lu');

// ? ich kann nur die die hinteren Parameter als optional kennzeichen
// ? ein Pflichtparameter kann nicht nach einem optionalen kommen
// ? function showUserGreeting2(firstName?: string, lastName: string)

function addMoreNumbers(a: number, b: number, c?: number, d?: number, e?: number) {
  // ? c ?? 0 ist die Kurzschreibweise von: wenn c da ist nimm den Wert von c - ansonsten die 0
  // ? bei Additionen ist es eine gute Idee die 0 zu nehmen, weil es das Ergebnis
  return a + b + (c ?? 0) + (d ?? 0) + (e ?? 0);
}
console.log(addMoreNumbers(4, 5));
console.log(addMoreNumbers(4, 5, 6));
console.log(addMoreNumbers(4, 5, 6, 7));
console.log(addMoreNumbers(4, 5, 6, 7, 8));

// * Default-Parameter in Funktion
// ? Default = Standardwert

// ? Funktion mit Parameter, die je nach Anzahl Hello World auf der console ausgibt
function repeatHelloWorld(numberOfTimes: number): void {
  for (let index = 0; index < numberOfTimes; index++) {
    console.log('Hello World');
  }
}

repeatHelloWorld(10);

// ? Ziel: bei neuer repeatHelloWorld Funktion soll, wenn kein Paramter angegeben wurde, 3 x Hello World ausgegeben werden
// ? mit = 3 sage ich: wenn kein Wert übergeben wurde, setze ihn standardmäßig auf 3
function repeatHelloWorldDefault(numberOfTimes: number = 3) {
  for (let index = 0; index < numberOfTimes; index++) {
    console.log('Hello World');
  }
}

repeatHelloWorldDefault(15);
console.log('Mit Defaultwert');
repeatHelloWorldDefault();

// ? ich kann für alle Parameter einen Standardwert angeben
function addWithDefault(a: number = 1, b: number = 2): number {
  return a + b;
}

// ? drei Optionen: beide angeben, nur a angeben, keinen angeben => nur b angeben geht hier nicht, damit kommt TS nicht zurecht
console.log(addWithDefault(3, 4));
// ? wenn ich hier nur einen Wert angebe, ist das der Wert von a und die hinteren Parameter sind default
console.log(addWithDefault(3));
console.log(addWithDefault());

// ? der Defaultwert sollte immer viele Fälle abdecken - wenn öfter Neukunden angelegt werden, dann true sonst false
function createCustomer(firstName: string, lastName: string, isNew: boolean = true) {
  const customer = { firstName, lastName, isNew };
  console.log(customer);
}

createCustomer('John', 'Doe'); // ? ist automatisch ein Neukunde mit isNew = true;
createCustomer('Mary', 'Mae', false);

// * Funktionen in Objekte deklarieren
const customer30 = {
  firstName: 'Harry',
  lastName: 'Windsor',
  age: 39,
  // ? Funktion kann auch innerhalb eines Objekts angelegt werden
  // ? Funktion ist auch nur im Objekt
  showInfo: function () {
    console.log('Harry Windsor is 39');
  }
};
// ? ich kann die Funktion nur beim Objekt aufrufen und brauche die runden Klammern für den Aufruf, wie den anderen Funktionen
// ? wir kommen immer nur über das Objekt an die Funktion
customer30.showInfo();

// ? wir können auch eine Arrow-Function im Objekt anlegen
const customer31 = {
  firstName: 'Megan',
  lastName: 'Markle',
  age: 41,
  showInfo: () => {
    console.log('Megan Markle is 41');
  }
};
// ? ich kann showInfo nicht Objekt aufrufen
// showInfo();
customer31.showInfo();

const customer32 = {
  firstName: 'Megan',
  lastName: 'Markle',
  age: 41,
  showInfo: function () {
    // ! im this steckt das aktuelle Objekt - ich kann auf alle internen Eigenschaften/Methoden mit this. zugreifen
    console.log(`${this.firstName} ${this.lastName} is ${this.age}`);
  },
  getBirthyear: function (): number {
    return 2024 - this.age;
  }
};

customer32.showInfo();
customer32.age = 42;
customer32.showInfo();
console.log(customer32.getBirthyear());

// ! wenn wir Arrow-Functions verwenden, können wir nicht auf this zugreifen
// ? sobald ich in einer Funktion in einem Objekt this verwenden will, muss ich die function-Schreibweise nehmen
const customer33 = {
  firstName: 'Megan',
  lastName: 'Markle',
  age: 41,
  showInfo: () => {
    // ? hier kommt ein Fehler, weil this bei Arrow-Functions nicht auf das Objekt zeigt
    // console.log(`${this.firstName} ${this.lastName} is ${this.age}`);
  }
};

// * in einem Datentyp kann auch festgelegt, dass eine Function nötig ist
// ? ich will, dass es immer wenn ich ein CustomerWithFunc-Objekt anlege eine Funktion showInfo gibt
// ? bei Funktionen in Datentypen muss ich die Arrow-Function Schreibweise verwenden
// ? Angabe muss immer so aussehen: erst runden Klammer für Parameter, dann Arrow und dann Rückgabedatentype, z. B. void oder number
type CustomerWithFunc = {
  firstName: string;
  lastName: string;
  age: number;
  showInfo: () => void;
  // ? mit Parameter und Rückgabewert
  calculateAge: (year: number, somethingElse: boolean) => number;
};

const customer34: CustomerWithFunc = {
  firstName: 'William',
  lastName: 'Windsor',
  age: 44,
  showInfo: function (): void {
    console.log(this.firstName, this.lastName);
  },
  calculateAge: function (year: number) {
    return year - (2024 - this.age);
  }
};

customer34.showInfo();
console.log(customer34.calculateAge(1999, false));
