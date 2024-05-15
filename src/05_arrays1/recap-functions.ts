printEmail('suzy@gmail.com', 100);
printEmail('lucy@gmail.com', 80);
printEmail('tony@gmail.com', 60);

function printEmail(emailAddress: string, repeatFormatNumber: number) {
  console.log('-'.repeat(repeatFormatNumber));
  console.log('*'.repeat(repeatFormatNumber));
  console.log(emailAddress);
  console.log('_'.repeat(repeatFormatNumber));
}

function add(number1: number, number2: number): number {
  return number1 + number2;
}

const returnValue = printEmail('max@gmail.com', 40);
console.log({ returnValue });

const sum22 = add(2, 2);
console.log({ sum22 });