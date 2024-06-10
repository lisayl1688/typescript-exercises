// # 

// // - Lege eine Datei an: lotto-numbers.ts
// // - Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.
// // - generiere dort eine Zufallszahl zwischen 1 und 100 mit Math.random().
// // - Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
// // // - Ansonsten wird die Zahl als Rückgabewert zurückgegeben
// // - Rufe in einer Schleife so oft generateLottoNumber auf, bis du 7 gültige Zahlen erhältst
// // - Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln.
// // Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.
// // - Es dürfen keine doppelten Zahlen in lottoResults aufgenommen werden
// // - Lass dir am Ende die Lottozahlenreihe auf der Konsole ausgeben

function generateLottoNumber () : number{
    let randomNumberBetween1And100 = Math.floor(Math.random() * 100) + 1;
    if (randomNumberBetween1And100 > 49){
        throw new Error('random number is bigger than 49!');
    }
    return randomNumberBetween1And100;
}


const randomNumbers : number []=[];

while (randomNumbers.length <= 7) {
    try {
        let randomNumber = generateLottoNumber();
        if(randomNumbers.includes(randomNumber)){
            continue
        }else{
         randomNumbers.push(randomNumber)
        }
         console.log(randomNumber);
    } catch (error) {
        console.log('Wir haben den Fehler abgefangen: ', error);
    }
}

console.log("hier die randomzahen:",randomNumbers);



