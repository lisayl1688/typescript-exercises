import OrderStatus from './OrderStatus';

export {};
// * Themen
// * Enum, local compare, output
// * Funktionen: wie lagere ich Code aus und übergebe Parameter
// * Array-Funktionen

// * Enum warum?
type Order = { customerName: string; status: string };

const newOrder: Order = { customerName: 'Max Muster', status: 'Angelegt' };

const newOrder2: Order = { customerName: 'Max Muster2', status: 'New' };

type OrderWithEnum = { customerName: string; status: OrderStatus };
// ? Enum sorgt dafür, dass ich immer nur aus einer Liste vordefinierter Werte auswählen kann
const newOrder3: OrderWithEnum = { customerName: 'Max Muster3', status: OrderStatus.Angelegt };

newOrder3.status = 999; // OrderStatus.Storniert;
// ? schöner und lesbarer
newOrder3.status = OrderStatus.Storniert;

// * localCompare vs a - b
// ? immer bei der sort-Funktion
// ? localCompare, wenn ich Strings sortiere
// ? - nehm ich bei Zahlen
const fruits = ['Äpfel', 'Zwetgschen', 'Birnen', 'Orangen', 'Zitrone'];
// ? localCompare sortieren nach deutscher Sortierlogik -> nach lokaler Spracheinstellung
fruits.sort((a: string, b: string) => a.localeCompare(b));
console.log(fruits);
// ? von z bis a sortieren - absteigend
fruits.sort((a: string, b: string) => b.localeCompare(a));
console.log(fruits);

const lottoNumbers = [32, 1, 4, 47, 24, 5];
lottoNumbers.sort((a: number, b: number) => a - b);
console.log(lottoNumbers);
lottoNumbers.sort((a: number, b: number) => b - a);
console.log(lottoNumbers);

// * Funktionen: wie lagere ich Code aus und übergebe Parameter
const textInput = document.getElementById('text-input') as HTMLInputElement;
const checkButton = document.getElementById('check-button');
const output = document.getElementById('output');

checkButton?.addEventListener('click', (event: Event) => {
  event.preventDefault();
  doEverything();
});

function doEverything() {
  if (isInputValid()) {
    if (textInput.value.length < 6) {
      showOutput('Kurzer', 'green');
      //   output.innerHTML = 'Kurzer Text';
      //   output.style.color = 'green';
      //   window.prompt('Kurzer Text');
    } else if (textInput.value.length < 15) {
      showOutput('Mittlerer', 'orange');
      //   output.innerHTML = 'Mittlerer Text';
      //   output.style.color = 'orange';
      //   window.prompt('Mittlerer Text');
    } else {
      showOutput('Langer', 'blue');
      //   output.innerHTML = 'Langer Text';
      //   output.style.color = 'blue';
      //   window.prompt('Langer Text');
    }
  }
}

// ? hier muss ich keine Parameter übergeben, weil textInput global, d. h. in der ganze
// ? Datei vorhanden ist
function isInputValid(): boolean {
  return textInput && textInput.value !== null && textInput.value.length > 0;
}

// ? ich kopiere den doppelten Code und schaue dann was ich als Parameter variable übergeben muss
function showOutput(text: string, color: string) {
  if (!output) {
    return;
  }
  output.innerHTML = text + ' Text';
  output.style.color = color;
  window.prompt(text);
}

function add(a: number, b: number): number {
  return a + b;
}

// * so komme ich später nicht mehr an das Ergebnis
console.log(add(4, 5));
// ? ich brauch dann immer eine Variable, um wieder an das Ergebnis ranzukommen
let result = add(4, 5);

console.log(result);

result++;
console.log(result);

// * Array-Funktionen
// ? find zum Suchen des ersten Vorkommens - ersten Treffers
const fruits2 = ['Äpfel', 'Zwetgschen', 'Birnen', 'Orangen', 'Zitrone'];
const firstFruitWithZ = fruits2.find((fruit: string) => fruit.startsWith('Z'));
console.log(firstFruitWithZ);
const firstFruitWithB = fruits2.find((fruit: string) => fruit.includes('B'));
console.log(firstFruitWithB);

// ? filter zum Suchen von allen Vorkommen
const allFruitsWithZ = fruits2.filter((fruit: string) => fruit.includes('Z'));
console.log(allFruitsWithZ);

// ? forEach um alle im Array durchzugehen und etwas damit machen
fruits2.forEach((fruit: string) => console.log(`${fruit} taste great`));

// ? map nehme ich immer, wenn ich etwas im Array umformen will bzw. eine neues Array dadurch
// ? erzeugen will
// ? bei map kann man sich auch den index mitgeben lassen
const numberedFruits2 = fruits2.map((fruit: string, index: number) => `${index + 1}. ${fruit}`);
console.log(numberedFruits2);
