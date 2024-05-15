const quote = 'When I wrote this code, only God and I understood what I did. Now only God knows. – Anonymous';

document.open();

// Die Länge von quote ausgeben -> Alex
document.write(`Die Länge ist: ${quote.length}<br>`);

// Das Wort code ausschneiden --> Pius
const startIndex = quote.indexOf('code');
let code = quote.slice(startIndex, startIndex + 'code'.length);
document.write(code);

// Anonymus durch ANONYMOUS ersetzen --> Christian
const quoteUpperCase: string = quote.replace('anonymus', 'ANONYMUS');
document.write(`${quoteUpperCase}<br>`);

// Den Buchstaben an Stelle 19 ausgeben --> Julian
const letter19: string = quote[19];
console.log({ letter19 });
document.write(letter19 + '<br>');

// Die Stelle (Index) finden, an der understood beginnt -> Dion
//const text = ' i understood';
const position = quote.indexOf('understood');
document.write('position understood ' + position + '<br>');

// Das ganze Zitat kleinschreiben --> Anna
const quoteLower = quote.toLowerCase();
document.write(`${quoteLower} <br>`);

// 'I' an der ersten Stelle durch das Augen-Emoji 👀 ersetzen --> Pablo
const quoteEyes = quote.replace('I', '👀');
document.write(`${quoteEyes}<br>`);

// An quote folgendes anhängen ' -> This is my favorite quote' -> Jenny
const quoteConcatinated = quote.concat(' -> This is my favorite quote');
document.write(`${quoteConcatinated}<br>`);

// Den letzen Index von 'I' finden --> lisa
const indexOfI: number = quote.indexOf('I', 45);
quote.lastIndexOf('I');
document.write(indexOfI.toString() + '<br>');

document.close();