const emptyArray: string[] = [];
emptyArray[5] = 'start';
console.log(emptyArray);

console.log('Element at 0:', emptyArray[0]);
emptyArray[0] = 'first';
console.log(emptyArray);

// * Kopieren von einfachen Datentypen
let priceOfShoes = 69.99;
console.log({ priceOfShoes });
let priceOfBackpack = priceOfShoes;
console.log({ priceOfBackpack });
priceOfShoes = 79.99;
console.log({ priceOfShoes });
priceOfBackpack = 59.99;
console.log({ priceOfBackpack });

// * Kopieren von Array
const fruits: string[] = ['Ananas', 'Banane', 'Pfirsich', 'Kirsche'];
console.log({ fruits });
// const deliciousFruits = fruits;
// console.log({ deliciousFruits });
// deliciousFruits.pop();
// console.log({ fruits });
// console.log({ deliciousFruits });

// ? Kopieren mit slice ohne Parameter kopiert das ganze Array
const realCopyWithSlice: string[] = fruits.slice();
realCopyWithSlice.pop();
console.log({ fruits });
console.log({ realCopyWithSlice });

// ? Kopieren mit concat ohne Parameter kopiert das ganze Array
const copyWithConcat: string[] = fruits.concat();
copyWithConcat.shift();
console.log({ fruits });
console.log({ copyWithConcat });

// ? Spread-Operator ... kopiert alle Elemente - "breitet/streicht Elemente aus"
const copyWithSpreadOperator: string[] = [...fruits];
copyWithSpreadOperator.push('Birne');
console.log({ fruits });
console.log({ copyWithSpreadOperator });

// ? Zwei Arrays verknüpfen
const vegetables: string[] = ['Erbsen', 'Bohnen', 'Blumenkohl'];

// ? mit concat wird ein weiteres Array angehängt
const fruitsAndVegetables = fruits.concat(vegetables);
console.log({ fruitsAndVegetables });

// ? mit dem Spread-Operator kann ich direkt mehrere Arrays hinterander hängen
const fruitsAndVeggiesWithSpread: string[] = [...fruits, ...vegetables];
console.log({ fruitsAndVeggiesWithSpread });