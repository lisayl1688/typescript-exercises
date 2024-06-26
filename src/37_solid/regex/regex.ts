const sentence = 'Ich habe eine Katze und einen Hund';

// * mit regulären Ausdrücken kann ich überprüfen, ob String einem bestimmten Muster entspricht
// * der reguläre Ausdruck steht immer zwischen zwei Schrägstrichen
// * Konvention ist dass man diese Regular Expression auch regex nennt
const regex = /Katze/;

// * ich muss immer regex.test() aufrufen und dort den String, den ich prüfen will reingeben
// * test() gibt immer ein boolean zurück - true: wenn Muster zutrifft, false wenn nicht
if (regex.test(sentence)) {
  console.log('Katze ist enthalten');
} else {
  console.log('Katze ist nicht enhalten');
}

// ? das Hütchen ist das Zeichen für Satzanfang ^
const regexStart = /^Katze/;
if (regexStart.test(sentence)) {
  console.log('Katze steht am Satzanfang');
} else {
  console.log('Katze steht nicht am Satzanfang');
}

// ? das Dollarzeichen ist das Zeichen für Satzende $
const regexEnd = /Katze$/;
if (regexStart.test(sentence)) {
  console.log('Katze steht am Satzende');
} else {
  console.log('Katze steht nicht am Satzende');
}

const isbn13 = '978-3-86647-176-4';

// ? [0-9]{3} => ich erwarte 3 Ziffern von 0-9
// ? [a-z]{2} => zwei Kleinbuchstaben von a - z
// ? [A-Z]{2} => zwei Großbuchstaben von a - z
const regexIsbn = /[0-9]{3}-[0-9]{1}-[0-9]{5}-[0-9]{3}-[0-9]{1}/;
if (regexIsbn.test(isbn13)) {
  console.log('ist eine gültige ISBN 13');
} else {
  console.log('ist keine gültige ISBN 13');
}
