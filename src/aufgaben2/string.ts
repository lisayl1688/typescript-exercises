console.log('hallo');

// String-Methods-TS-Level-1_1
const firstName: string = 'Lisa';
const lastName: string = 'Ly';
const fullName: string = firstName + lastName;
const firstNameLength: number = firstName.length;
const lastNameLength: number = lastName.length;
const fullNameLength: number = fullName.length;
console.log({ firstNameLength });
console.log({ lastNameLength });
console.log({ fullNameLength });

// String-Methods-TS-Level-1_2
const earthQuote =
  'How inappropriate to call this planet Earth, when clearly it is Ocean.';
const indexOfh: number = earthQuote.indexOf('h');
console.log({ indexOfh });
const indexOfMoon: number = earthQuote.indexOf('Moon');
console.log({ indexOfMoon });

// String-Methods-TS-Level-1_3
let oceanQuote =
  'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.';
const zeichen1: number = oceanQuote.search(';');
console.log({ zeichen1 });
const zeichen2: number = oceanQuote.search('green');
console.log({ zeichen2 });
const zeichen3: number = oceanQuote.search('blue');
console.log({ zeichen3 });

// String-Methods-TS-Level-1_4
const susisStatus = 'Susi is going to codingschool';
const slice1: string = susisStatus.slice(0, 4);
const slice2: string = susisStatus.slice(5, 7);
const slice3: string = susisStatus.slice(5, 17).concat(susisStatus.slice(23));
const slice4: string = susisStatus.slice(23);
const slice5: string = susisStatus
  .slice(0, 7)
  .concat(' ')
  .concat(susisStatus.slice(23));
const sliceErg1 = document.getElementById('content');
const ergSlice: string =
  slice1 +
  '<br>' +
  slice2 +
  '<br>' +
  slice3 +
  '<br>' +
  slice4 +
  '<br>' +
  slice5;

if (sliceErg1) {
  sliceErg1.innerHTML = ergSlice;
}

// String-Methods-TS-Level-1_5
const whereIsSusi = 'Susi is back from codingschool';
const subString1: string = whereIsSusi.substring(0, 5);
const subString2: string = whereIsSusi.substring(5, 7);
const subString3: string = whereIsSusi
  .substring(5, 17)
  .concat(whereIsSusi.slice(24));
const subString4: string = whereIsSusi.substring(24);
const subString5: string = whereIsSusi;

document.open();
document.write(
  subString1 +
    '<br>' +
    subString2 +
    '<br>' +
    subString3 +
    '<br>' +
    subString4 +
    '<br>' +
    subString5 +
    '<br>'
);
document.close();

// String-Methods-TS-Level-1_6
const susisJob = 'Sam is working at codingschool';
const subStr1: string = susisJob.substring(0, 3);
const subStr2: string = susisJob.substring(4, 6);
const subStr3: string = susisJob
  .substring(15, 17)
  .concat(' ')
  .concat(whereIsSusi.slice(24));
const subStr4: string = susisJob
  .substring(0, 3)
  .concat(whereIsSusi.slice(7, 11))
  .concat(whereIsSusi.slice(15, 17))
  .concat(whereIsSusi.slice(24));
document.open();
document.write(
  subStr1 + '<br>' + subStr2 + '<br>' + subStr3 + '<br>' + subStr4 + '<br>'
);
document.close();

// String-Methods-TS-Level-1_7
const samsStatus = 'Sam is good at codingschool';
const differentSam1: string = samsStatus.replace(
  'Sam is good at codingschool',
  'Sam is bad at school'
);
const differentSam2: string = samsStatus.replace(
  'Sam is good at codingschool',
  'Sam is good at school'
);
const differentSam3: string = samsStatus.replace(
  'Sam is good at codingschool',
  'Sam is good at tennis'
);
document.open();
document.write(differentSam1 + '<br>' + differentSam2 + '<br>' + differentSam3);
document.close();

// String-Methods-TS-Level-1_9
const infoAboutSam = 'Sam is going to codingschool';
const susi = 'Susi';
const and = 'and';

const text1: string = infoAboutSam
  .substring(0, 16)
  .concat(infoAboutSam.slice(22));

const text2: string = infoAboutSam.replace(
  'Sam is going to codingschool',
  'Sam is going to the movie theater'
);
const text3: string = infoAboutSam.replace(
  'Sam is going to codingschool',
  'Susi and Sam are going to school'
);
const text4: string = infoAboutSam.replace(
  'Sam is going to codingschool',
  'Susi and Sam are going to gym and to the movie theater'
);
const text5: string = text1.replace('Sam', 'Susi');

document.open();
document.write(text1 + ' '.concat('and to the movie theater') + '<br>');
document.write(text2 + '<br>');
document.write(text3 + '<br>');
document.write(text4 + '<br>');
document.write(text5 + ' '.concat('and to the movie theater'));
document.close();

// String-Methods-TS-Level-1_8
const whereIsSam = 'Sam is going to school';
const samUppercase: string = whereIsSam.toUpperCase();
console.log({ samUppercase });
const samLowercase: string = whereIsSam.toLowerCase();
console.log({ samLowercase });
const samCase1: string = whereIsSam.substring(0, 3);
const samCase1Up: string = samCase1.toUpperCase();
console.log({ samCase1Up });
const samCase2: string = whereIsSam.substring(16);
const samCase2Up: string = samCase2.toUpperCase();
console.log({ samCase2Up });
const samCase3: string = whereIsSam.substring(4, 15);
const samCase3Up: string = samCase3.toUpperCase();
console.log({ samCase3Up });

const samCase4: string = whereIsSam.substring(0, 1);
const samCase4Up: string = samCase4.toUpperCase();
console.log({ samCase4Up });
const samCase5: string = whereIsSam.substring(6, 8);
const samCase5Up: string = samCase5.toUpperCase();
console.log({ samCase5Up });
const samCase6: string = whereIsSam.substring(15, 17);
const samCase6Up: string = samCase6.toUpperCase();
console.log({ samCase6Up });

document.open();
document.write(samUppercase + '<br>');
document.write(samLowercase + '<br>');
document.write(samCase1Up + ' ' + 'is going to' + ' ' + samCase2Up + '<br>');
document.write('Sam' + ' ' + samCase3Up + ' ' + 'school' + '<br>');
document.write(
  samCase4Up + 'am is' + samCase5Up + 'oing to' + samCase6Up + 'chool' + '<br>'
);
document.close();

// Number-Methods-TS-Level-1_2
let num0 = 5.824452;
let n = num0.toFixed(2);
console.log(n);
let num1 = 15.16698;
let a = num1.toFixed(2);
console.log(a);
let num2 = 7.78714;
let b = num2.toFixed(2);
console.log(b);
let num3 = '12.3';
const num3AsNumber = parseFloat(num3);
let c = num3AsNumber.toFixed(2);
console.log(c);
// let num4 = true;
// let d = num4.toFixed(2);
// console.log(d);
// let num5 = false;
// let e = num5.toFixed(2);
// console.log(e);
let num6 = '321';
const num6AsNumber = parseFloat(num6);
let f = num6AsNumber.toFixed(2);
console.log(f);
// let num7 = 'supercode';
// let g = num7.toFixed(2);
// console.log(g);

// Number-Methods-TS-Level-1_3
let zahl: number = 15.16698;
let string1: string = zahl.toString();
let string2: string = zahl.toString(2);
let string3: string = zahl.toString(8);
let string4: string = zahl.toString(16);
console.log({ string1 });
console.log({ string2 });
console.log({ string3 });
console.log({ string4 });

let zahl1: number = 7.78714;
let string1_1: string = zahl.toString();
let string2_1: string = zahl.toString(2);
let string3_1: string = zahl.toString(8);
let string4_1: string = zahl.toString(16);
console.log({ string1_1 });
console.log({ string2_1 });
console.log({ string3_1 });
console.log({ string4_1 });

let zahl2: string = '12.3';
let string1_2: string = zahl.toString();
let string2_2: string = zahl.toString(2);
let string3_2: string = zahl.toString(8);
let string4_2: string = zahl.toString(16);
console.log({ string1_2 });
console.log({ string2_2 });
console.log({ string3_2 });
console.log({ string4_2 });

let zahl3: string = '3.14random';
let string1_3: string = zahl.toString();
let string2_3: string = zahl.toString(2);
let string3_3: string = zahl.toString(8);
let string4_3: string = zahl.toString(16);
console.log({ string1_3 });
console.log({ string2_3 });
console.log({ string3_3 });
console.log({ string4_3 });

let zahl4: string = '32px';
let string1_4: string = zahl.toString();
let string2_4: string = zahl.toString(2);
let string3_4: string = zahl.toString(8);
let string4_4: string = zahl.toString(16);
console.log({ string1_4 });
console.log({ string2_4 });
console.log({ string3_4 });
console.log({ string4_4 });

let zahl5: boolean = true;
let string1_5: string = zahl.toString();
let string2_5: string = zahl.toString(2);
let string3_5: string = zahl.toString(8);
let string4_5: string = zahl.toString(16);
console.log({ string1_5 });
console.log({ string2_5 });
console.log({ string3_5 });
console.log({ string4_5 });

let zahl6: boolean = false;
let string1_6: string = zahl.toString();
let string2_6: string = zahl.toString(2);
let string3_6: string = zahl.toString(8);
let string4_6: string = zahl.toString(16);
console.log({ string1_6 });
console.log({ string2_6 });
console.log({ string3_6 });
console.log({ string4_6 });

let zahl7: string = '321';
let string1_7: string = zahl.toString();
let string2_7: string = zahl.toString(2);
let string3_7: string = zahl.toString(8);
let string4_7: string = zahl.toString(16);
console.log({ string1_7 });
console.log({ string2_7 });
console.log({ string3_7 });
console.log({ string4_7 });

let zahl8: string = 'Supercode';
let string1_8: string = zahl.toString();
let string2_8: string = zahl.toString(2);
let string3_8: string = zahl.toString(8);
let string4_8: string = zahl.toString(16);
console.log({ string1_8 });
console.log({ string2_8 });
console.log({ string3_8 });
console.log({ string4_8 });

// Number-Methods-TS-Level-1_4
const x = '999';
const y = Number(x);

const nummer = 15.16698;
const nummerNr = Number(nummer);
console.log(nummerNr);
const nummer1 = 7.78714;
const nummerNr1 = Number(nummer1);
console.log(nummerNr1);
const nummer2 = '12.3';
const nummerNr2 = Number(nummer2);
console.log(nummerNr2);
const nummer3 = '3.14random';
const nummerNr3 = Number(nummer3);
console.log(nummerNr3);
const nummer4 = '32px';
const nummerNr4 = Number(nummer4);
console.log(nummerNr4);
const nummer5 = true;
const nummerNr5 = Number(nummer5);
console.log(nummerNr5);
const nummer6 = false;
const nummerNr6 = Number(nummer6);
console.log(nummerNr6);
const nummer7 = '321';
const nummerNr7 = Number(nummer7);
console.log(nummerNr7);
const nummer8 = 'SuperCode';
const nummerNr8 = Number(nummer8);
console.log(nummerNr8);
