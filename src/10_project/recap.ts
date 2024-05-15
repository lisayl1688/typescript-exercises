// ?- Schreibe eine Funktion, die die [Fakultät] (engl. Factorial) einer übergegebenen Zahl vom Typ number berechnet
// ? und das Ergebnis der Fakultätsberechnung zurückgibt.
// ?- Verwende eine Schleife, um die Multiplikation der Zahlen von 1 bis n durchzuführen.
// ?- Wenn 0 und 1 als Parameter übergeben werden, soll direkt das Ergebnis 1 zurückgegeben werden

function getFactorial(number: number): number {
    // bei 0 und 1 - 1 zurückgeben
    if (number === 0 || number === 1) {
      return 1;
    }
    // ! bei Summen am besten mit 0 anfangen - bei Multiplikation mit 1
    // ? vor der Schleife bietet es sich an, eine Variable anzulegen
    let factorialResult = 1;
    // Schleife mit Berechnung
    // ? nicht mit 0 anfangen - sonst würde mit 0 multipliziert und es kommt immer 0 raus
    for (let index = 1; index <= number; index++) {
      factorialResult = factorialResult * index;
      // ? Kurzschreibweise: factorialResult *= index;
    }
    // Ergebnis zurückgeben
    return factorialResult;
  }
  
  // factorial(3) = 3 · 2 · 1 = 6
  // factorial(4) = 4 · 3 · 2 · 1 = 24
  // factorial(5) = 5 · 4 · 3 · 2 · 1 = 120
  // factorial(6) = 6 · 5 · 4 · 3 · 2 · 1 = 720
  
  console.log('Factorial von 3: ', getFactorial(3));
  console.log('Factorial von 4: ', getFactorial(4));
  console.log('Factorial von 5: ', getFactorial(5));
  console.log('Factorial von 6: ', getFactorial(6));
  
  // * Klassenarbeit
  
  // ? Funktion Parameter vom typ number[]
  // ? Punkte von 0 bis 100 in einem Array -> allPointsInClass
  function getClassRating(allPointsInClass: number[]): string {
    // ? mit length überprüfen, ob das Array einen Inhalt hat - falls length 0, wird das das false interpretiert
    // ? 0 entspricht false und alles größer 0 true
    if (!allPointsInClass || !allPointsInClass.length) {
      return 'Unbekannt';
    }
    // ? Durchschnitt der Punkte berechnen
    // ? const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46]
    // ? am Anfang wieder eine Variable für das Ergebnis - hier die Summe - anlegen
    // ? hier wird dann in jedem Schleifendurchlauf aufsummiert
    let sumOfAllPoints = 0;
    for (let i = 0; i < allPointsInClass.length; i++) {
      const singlePoint = allPointsInClass[i];
      sumOfAllPoints = sumOfAllPoints + singlePoint;
      // alternative Schreibweise: sumOfAllPoints += singlePoint;
    }
    const averagePoints = sumOfAllPoints / allPointsInClass.length;
    console.log({ averagePoints });
  
    // ? hier kann entweder if oder switch verwendet werden
    //   if (averagePoints < 50) {
    //     return 'Ungenügend';
    //   } else if (averagePoints < 60) {
    //     return 'Mangelhaft';
    //   } else if (averagePoints < 70) {
    //     return 'Ausreichend';
    //   } else if (averagePoints < 80) {
    //     return 'Befriedigend';
    //   } else if (averagePoints < 90) {
    //     return 'Gut';
    //   } else {
    //     return 'Sehr gut';
    //   }
  
    // ? Bewertung ermitteln und direkt zurückgeben mit return
    switch (true) {
      case averagePoints < 50:
        return 'Ungenügend';
      case averagePoints < 60:
        return 'Mangelhaft';
      case averagePoints < 70:
        return 'Ausreichend';
      case averagePoints < 80:
        return 'Befriedigend';
      case averagePoints < 90:
        return 'Gut';
      default:
        return 'Sehr gut';
    }
  }
  
  console.log(getClassRating([50, 100]));
  console.log(getClassRating([10, 20]));
  console.log(getClassRating([44, 11, 70, 80, 52, 88, 94, 3, 25, 46]));
  console.log(getClassRating([99, 100]));