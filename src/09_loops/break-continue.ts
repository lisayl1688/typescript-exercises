// * break bricht die gesamte Schleife sofort ab
for (let index = 0; index < 10; index++) {
    console.log(index);
    if (index === 8) {
      break;
    }
  }
  console.log('weiter im Code');
  
  // * Diese Funktion sucht die kleinste Zahl zwischen startNumber und endNumber, die durch 7 teilbar ist
  // * sobald die Zahl gefunden ist, wird die Schleife abgebrochen
  function dividableBySeven(startNumber: number, endNumber: number) {
    let result = 0;
    for (let index = startNumber; index <= endNumber; index++) {
      if (index % 7 === 0) {
        result = index;
        break;
      }
    }
    return result;
  }
  
  const result1 = dividableBySeven(15, 23);
  console.log({ result1 });
  
  const result2 = dividableBySeven(300, 330);
  console.log({ result2 });
  
  // * continue bricht an der Stelle den aktuellen Schleifendurchlauf ab (nicht die komplette Schleife)
  for (let index = 0; index < 10; index++) {
    if (index % 2 === 0) {
      continue;
    }
    console.log(index);
    const sum = index + 33;
    console.log(sum);
  }
  
  // * map - Werte aus einem Array umwandeln - Ergebnis ist ein neues Array
  const numbers4: number[] = [3, 5, 6, 7, 8, 12];
  const squareNumbers = numbers4.map((number: number) => {
    const square = number * number;
    return square;
  });
  console.log({ squareNumbers });
  
  const toDos: string[] = ['Cook', 'Read', 'Sing', 'Dance'];
  // const toDosIng = toDos.map((toDo: string) => {
  //   if (toDo.endsWith('e')) {
  //     const toDoAsArray = toDo.split('');
  //     toDoAsArray.pop();
  //     toDo = toDoAsArray.join('');
  //   }
  //   return toDo + 'ing';
  // });
  // console.log({ toDosIng });
  
  // ? für verschiedene Arrays soll immer ing angehangen
  const toDos2: string[] = ['Walk', 'Stand', 'Sit'];
  function addIng(array: string[]) {
    const toDosIng = array.map((toDo: string) => {
      if (toDo.endsWith('e')) {
        const toDoAsArray = toDo.split('');
        toDoAsArray.pop();
        toDo = toDoAsArray.join('');
      }
      return toDo + 'ing';
    });
    console.log({ toDosIng });
  }
  
  addIng(toDos);
  addIng(toDos2);
  addIng(['Sleep', 'Eat']);