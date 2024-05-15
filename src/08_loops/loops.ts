// * Schleifen dienen dazu, Code mehrfach zu durchlaufen

// ? wir wollen 5x Hello World auf der Konsole ausgeben
// ? wir legen eine Variable index vom Typ number mit dem Startwert 0 an
// ? wir legen eine Bedingung fest, wann die Schleife abgebrochen werden soll: wenn index nicht mehr kleiner als 5 ist
// ? wir zählen in jedem Schleifendurchlauf die Variable index um 1 hoch: index++
for (let index: number = 0; index < 5; index++) {
    console.log('Hello World!');
    console.log('-'.repeat(50));
  }
  
  // ? hier beginnen wir bei 12 mit dem Zählen und hören auf, wenn der index nicht mehr kleiner als 24 ist
  for (let index: number = 12; index < 24; index++) {
    console.log(index);
  }
  
  // ? hier zählen wir von 0 bis 20 und zählen in jedem Schleifendurchlauf um 2 hoch: index = index + 2
  // ? = gerade Zahlen von 0 bis 20
  for (let index: number = 0; index < 20; index = index + 2) {
    console.log('+2 ', index);
  }
  // ? wenn wir die ungeraden Zahlen von 0 bis 20 wollen, müssen wir einfach bei 1 anfangen und dann immer 2 hochzählen
  for (let index: number = 1; index < 20; index = index + 2) {
    console.log('ungerade ', index);
  }
  
  // ? wir können auch herunterzählen
  // ? wir fangen bei einer größeren Zahl an (20), wir hören auf, wenn die 0 erreicht ist
  // ? mit index-- zählen wir in jedem Schleifendurchlauf um eins nach unten
  for (let index: number = 20; index >= 0; index--) {
    console.log('Countdown ' + index);
  }
  
  // ? alle Zahlen von 0 bis 30 durchgehen und nur die ausgeben, die durch 3 teilbar sind
  for (let index = 0; index <= 30; index++) {
    if (index % 3 === 0) {
      console.log('durch 3 teilbar: ', index);
    }
  }
  
  // ? alle Zahlen von 1 bis 30 aufsummieren
  // ? wir merken uns das Ergebnis in einer vorher definierten Variablen sumOfNumbersTo30
  let sumOfNumbersTo30: number = 0;
  for (let index = 1; index <= 30; index++) {
    // ? zur bisherigen Summe wird der aktuelle Wert von Index hinzuaddiert
    sumOfNumbersTo30 += index;
    console.log(sumOfNumbersTo30);
  }
  console.log('Gesamtsumme: ', sumOfNumbersTo30);
  
  // ? wir können auch einen String Buchstabe für Buchstabe mit for durchlaufen
  // ? hier wollen wir die Buchstaben verdoppeln
  let text = 'Das ist ein längerer Text.';
  // ? wir legen uns hier eine Ergebnisvariable an
  let doubledText = '';
  for (let index = 0; index < text.length; index++) {
    // ? hänge an doubledText den aktuellen Buchstaben 2x an
    doubledText += text[index] + text[index];
  }
  console.log(doubledText);
  
  // ? ein Array durchlaufen geht auch mit for
  // ? verwende aber lieber Array.forEach oder for.. of
  const numbersToEleven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  for (let index = 0; index < numbersToEleven.length; index++) {
    const element = numbersToEleven[index];
    console.log('Element ', element);
  }
  
  // ? wir können uns ein Array auch mit einer for-Schleife selbst befüllen
  // ? wir legen dazu das Array vorher leer an
  const numbersToTwelve: number[] = [];
  // ? wir gehen die Zahlen von 1 bis 12 durch
  for (let index = 1; index <= 12; index++) {
    // ? wir schreiben den aktuellen Wert von index in das Array
    numbersToTwelve.push(index);
  }
  console.log({ numbersToTwelve });
  
  // * while
  // ? alternativ zu for können wir auch while verwenden
  // ? wir müssen dann aber unseren Zähler selbst anlegen und in der Schleife hochzählen
  let counterForWhile = 0;
  
  // ? while wird solange ausgeführt, wie counterForWhile < 10 ist
  while (counterForWhile < 10) {
    console.log('Hello world from while.');
    // ? wir zählen hier selbst hoch
    counterForWhile++;
  }
  
  // ? mit while kann man auch auf User-Input reagieren
  let userInput = '';
  
  // ? zeige so lange einen neuen window.prompt an, bis der User STOP eingibt
  //  while (userInput !== 'STOP') {
  //    userInput = window.prompt('Bitte gib einen Text ein') ?? '';
  //  }
  
  // * do-while
  // ? der Unterschied von while und do-while ist, dass bei do-while der Code mindestens 1x ausgeführt wird,
  // ? bevor die Bedingung geprüft wird
  
  let specialCounter = 5;
  // ? kopfgesteuerte Schleife
  while (specialCounter < 5) {
    console.log('Hello from while');
  }
  
  do {
    console.log('Hello from do while');
    // ? fussgesteuerte Schleife
  } while (specialCounter < 5);
  
  const meals: string[] = ['Pizza', 'Pommes', 'Döner', 'Tomatensuppe'];
  
  // ? do while mit Zähler
  let dowhileCounter = 0;
  do {
    console.log(dowhileCounter);
    dowhileCounter++;
  } while (dowhileCounter < 10);
  
  // * for of
  // ? mit for.. of kann ich ein Array durchlaufen und erhalte in jedem Schleifendurchlauf das aktuelle Array-Element
  for (const meal of meals) {
    console.log(meal);
  }
  
  // ? alternativ zu for.. of kann ich auch forEach verwenden
  meals.forEach((meal: string) => {
    console.log(meal);
  });