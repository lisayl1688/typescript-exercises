//* Math.round(auf oder abrunden)
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.51232222));

//* Math.floor (immer nach unten abrunden)
console.log(Math.floor(3.99999));
console.log(Math.floor(3.0));

//* Math.ceil (immmer auf die nächste ganze zahl aufrunden )
console.log(Math.ceil(3.000001));
console.log(Math.ceil(7.83));

//* Math.random ( zufallzahl zwischen 0 und 1 generieren lassen)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//* zwischen 1 und 10 zb 
const randomSmallerThanOne = Math.random();
console.log('zufallszahl:', randomSmallerThanOne);
const randomFloatToTen = randomSmallerThanOne = 10;
console.log('zufall*10:', randomFloatToTen);
console.log('aufgerundet', Math.ceil(randomFloatToTen));// zwischen 1 und 10
console.log('abgerundet', Math.floor(randomFloatToTen));// zwischen 0 und 10

//* zwischen 0 und 150 zb 
const randomTo150 = Math.floor(Math.random() * 151);
console.log('zufall bis 150:', randomTo150);