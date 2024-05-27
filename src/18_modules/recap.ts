// ? - Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt
// ? function-Schreibweise
function multiply(a: number, b: number) {
    const result = a * b;
    window.alert(result);
  }
  // ? arrow function Schreibweise
  const multiplyArrow = (a: number, b: number): void => {
    const result = a * b;
    window.alert(result);
  };
  
  multiply(3, 5);
  multiplyArrow(4, 5);
  
  // ? - Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.
  function printKeys(object: Object): void {
    console.log(Object.keys(object));
  }
  
  printKeys({ firstName: 'Manny', lastName: 'Delgado' });
  
  // ? Arrow Schreibweise
  const printKeysArrow = (object: Object): void => {
    console.log(Object.keys(object));
  };
  
  printKeysArrow({ firstName: 'Manny', lastName: 'Delgado' });