// ? - Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen.
// ? Wir erstellen dazu ein Array mit standardisierten Dateinamen – wie in der Ergebnisvorschau.
// ? image_001.jpg - image_100.jpg
// ? - Deklariere dafür die Function createImageNames.
// ? - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// ? - Schreibe eine for-Schleife.
// ? - Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermittelt wie viel Nullen vor der Zahl stehen müssen. Alternativ kannst du die String-Methode [padStart()](https://www.w3schools.com/jsref/jsref_string_padstart.asp) einsetzen.
// ? Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
// ? Gib das Array mit return aus der Funktion zurück
// ? Lasse dir das Ergebnis auf der Konsole ausgeben

function createImageNames(): string[] {
    const returnArray = [];
    for (let index = 1; index <= 100; index++) {
      //image_001.jpg
      let fileName = '';
      if (index < 10) {
        fileName = 'image_00' + index + '.jpg';
      } else if (index < 100) {
        fileName = 'image_0' + index + '.jpg';
      } else {
        fileName = 'image_' + index + '.jpg';
      }
      //console.log(fileName);
      returnArray.push(fileName);
    }
    // ! immer nach der Schleife das Ergebnis zurückgeben - returnen
    return returnArray;
  }
  
  const allFileNames = createImageNames();
  console.log({ allFileNames });
  
  function createImageNamesWithPadStart(): string[] {
    const returnArray = [];
    for (let index = 1; index <= 100; index++) {
      //image_001.jpg
      let fileName = 'image_' + index.toString().padStart(3, '0') + '.jpg';
      returnArray.push(fileName);
    }
    // ! immer nach der Schleife das Ergebnis zurückgeben - returnen
    return returnArray;
  }
  
  const allFileNamesWithPad = createImageNamesWithPadStart();
  console.log({ allFileNamesWithPad });