// * Math Bibliothek

const accountBalance: number = 2584.55;
//? zur nächsten ganzen Zahl abrunden
console.log(Math.floor(accountBalance));
//? zur nächsten ganzen Zahl aufrunden
console.log(Math.ceil(accountBalance));
// ? echtes Runden
console.log(Math.round(accountBalance));

const randomNumber1 = Math.ceil(Math.random() * 10);
console.log(randomNumber1);

// * Minimum ermitteln
const minimum = Math.min(33, 11, 44, 55);
console.log({ minimum });

// * Maximum ermitteln
const maximum = Math.max(33, 11, 44, 55);
console.log({ maximum });

// * Potenz berechnen 2 hoch 3 = 2 * 2 * 2
let power = Math.pow(2, 3);
console.log({ power });
let power2 = Math.pow(10, 4);
console.log({ power2 });

// * Wurzel (Quadratwurzel) berechnen - 25 = 5
let square25 = Math.sqrt(25);
console.log({ square25 });

let square121 = Math.sqrt(121);
console.log({ square121 });