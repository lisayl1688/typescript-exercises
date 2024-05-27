const add = (a: number, b: number) => {
    let ergebnis = a+b;
    return ergebnis;
}

const subtract = (a: number, b: number) => {
    let ergebnis = a-b;
    return ergebnis;
}

const multiply = (a: number, b: number) => {
    let ergebnis = a*b;
    return ergebnis;
}

const divide = (a: number, b: number) => {
    let ergebnis = a/b;
    return ergebnis;
}

// - Exportiere diese Funktionen am Dateiende mit den neuen Namen:
//  addNumbers, subtractNumbers, multiplyNumbers und divideNumbers

// import { calculatePrice as calculatePrice2, MAXDISCOUNT } from './customer2';


export {add as addNumbers, subtract as subtractNumbers, multiply as multiplyNumbers, divide as divideNumbers};
