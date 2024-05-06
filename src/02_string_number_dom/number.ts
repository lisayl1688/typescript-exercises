console.clear();
const age: number = 36;
const salary: number = 4345.334;

// ? toString
// ? wandelt eine Zahl in einen String um
const ageAsString: string = age.toString();
console.log({ ageAsString });

const salaryAsString: string = salary.toString();
console.log({ salaryAsString });

// ? toFixed
// ? wandelt eine Zahl in einen String um mit Anzahl der Nachkommastellen (gerundet)
const salaryToFixed = salary.toFixed(2);
console.log({ salaryToFixed });

const highSalary = 6666.447;
const highSalaryToFixed = highSalary.toFixed(2);
console.log({ highSalaryToFixed });

// ? toPrecision
// ? wandelt eine Zahl in einen String um mit Anzahl der Nachkommastellen (gerundet)
const salaryToPrecision = salary.toPrecision(2);
console.log({ salaryToPrecision });

// ? parseInt
// ? wandelt einen String in eine Ganzzahl um
const birthYear = '1995';
console.log({ birthYear });
const birthYearAsNumber: number = parseInt(birthYear);
console.log({ birthYearAsNumber });

// ? parseFloat
// ? wandelt einen String in eine Kommazahl um
const tax = '17.55';
const taxAsNumber = parseFloat(tax);
const taxAsInt = parseInt(tax);
console.log({ taxAsInt });
console.log({ taxAsNumber });

// ? Number
// ? mit Number können sowohl Ganzzahlen als auch Kommazahlen konvertiert werden
const highNumberAsString = '234234234.3333';
const highNumber = Number(highNumberAsString);
console.log({ highNumber });

// ? toExponential
// ? wandelt eine Zahl in die Exponentialnotation um
const salaryToExponential = salary.toExponential(2);
console.log(salaryToExponential);
