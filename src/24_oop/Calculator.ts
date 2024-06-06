class Calculator {
  // ? es gibt auch statische Eigenschaften
  static Warning = 'This is a warning';
  // ? mit static mache ich eine Methode statisch, d. h. nicht von einer Instanz abhängig
  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }

  static divide(a: number, b: number) {
    if (b === 0) {
      console.error('Division by zero not allowed');
      return;
    }
    return a / b;
  }
}

export default Calculator;
