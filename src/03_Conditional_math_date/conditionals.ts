const randomErrorNumber: number = Math.ceil(Math.random() * 10);
if (randomErrorNumber == 1){
    console.log('schwerer Fehler');
}else if (randomErrorNumber == 2) {
    console.log('mittelschwerer Fehler');
}else if(randomErrorNumber == 3){
    console.log('leichter Fehler');
} else {
    console.log('alles top');
}

//* prüfun g mit switch
switch (randomErrorNumber) {
    case 1:
        console.log('schwerer Fehler');
        break;
    case 2:
        console.log('mittelschwerer Fehler');
        break;
    case 3:
        console.log('leichter Fehler');
        break;
    default:
        console.log('alles top');
        break;
}

const fruitVegetables = window.prompt('gib mir ein obst oder gemüse');
if (fruitVegetables === 'Banane' || fruitVegetables === 'Apfel' || fruitVegetables === ' birne'){
    console.log('das ist eine frucht');
}else if (fruitVegetables === 'Blumenkohl' || fruitVegetables === 'Krarotte' || fruitVegetables === ' Sellerie') {
    console.log('das ist ein gemüse');
}else{
    console.log('keine ahnung was das ist');
}

switch (fruitVegetables) {
    case 'Banane':
    case 'Apfel':
    case 'Birne':
        console.log('das ist eine frucht');
        break;
    case 'Blumenkohl':
    case 'Krarotte':
    case ' Sellerie':
        console.log('das ist ein gemüse');
        break;
    default:
        console.log('keine ahnung was das ist');
        break;
}

if (randomErrorNumber < 5) {
    console.log('Kein Fehler');
  } else if (randomErrorNumber < 8) {
    console.log('Warnung');
  } else {
    console.log('Fehler');
  }
  
  // * nicht unbedingt zu empfehlen
  switch (true) {
    case randomErrorNumber < 5:
      console.log('Kein Fehler');
      break;
    case randomErrorNumber < 8:
      console.log('Warnung');
      break;
    default:
      console.log('Fehler');
      break;
  }

// * ternary expression
const isOnline1: boolean = Math.random() <= 0.5;

if (isOnline1) {
  console.log('User is online');
} else {
  console.log('User is offline');
}

const message: string = isOnline1 ? 'User is online' : 'User is offline';
console.log({ message });

const randomLottoNumber: number = Math.ceil(Math.random() * 49);
const lottoMessage = randomLottoNumber < 5 ? 'What a small number' : 'Not a small number';
console.log(lottoMessage);