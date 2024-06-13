// - Lege eine Datei number-methods.ts an
// - Erstelle ein Promise vom Typ number[]
// - Lass dir mit Math.random drei zufällige Werte zwischen 1 und 130 generieren
// - Ist einer der Werte größer als 100, rejecte das komplette Promise mit einem Fehlertext
// - Schreibe andernfalls die drei Werte in ein Array und resolve das Array

// - Hänge dich an das Promise
// - Es werden fünf then-Blöcke aneinandergehängt (Chaining)
// - Die Ergebnisse sollen jeweils erst auf die Konsole geloggt und dann weitergereicht werden
// - Im ersten then-Block soll auf jeden Wert 7 aufaddiert werden
// - Im zweiten then-Block soll jeder Wert mit 2 multipliziert werden
// - Im dritten then-Block soll von jedem Wert 1 abgezogen werden
// - Im vierten then-Block soll für jeden Wert Modulo 2 ermittelt werden
// - Im fünften then-Block sollen die Werte auf die Konsole geloggt werden
// - Gib im catch-Block den Fehler auf der Konsole aus
// - Gib im finally-Block “Finished” auf der Konsole aus

function generateRandomNumber():void{
    const zahl = Math.ceil(Math.random() * 130)
    if(zahl>100) {
        generateRandomNumber()
    }else{
        dreiZufallsZahlen.push(zahl)
    }
}

const dreiZufallsZahlen:number[] = [];
const ersteZufallsNummerZwischen1Und130 = generateRandomNumber() 
const zweiteZufallsNummerZwischen1Und130 = generateRandomNumber()
const dritteZufallsNummerZwischen1Und130 = generateRandomNumber()

const nummernVersprechen : Promise<number[]>= new Promise ((resolve,reject) =>{
        if(dreiZufallsZahlen){
            resolve (dreiZufallsZahlen)
         }else {
            reject('die Zahl ist größer als 100');
          }
})

nummernVersprechen
.then ((dreiZufallsZahlen: number[])=>{
    const addierte7Dazu = dreiZufallsZahlen.map(zahl => zahl + 7);
    console.log(addierte7Dazu);
    return addierte7Dazu;
})
.then ((addierte7Dazu: number[])=>{
    const multipliziereAll2 = addierte7Dazu.map(zahl => zahl * 2);
    console.log(multipliziereAll2);
    return multipliziereAll2;
})
.then ((multipliziereAll2: number[])=>{
    const subtrahiereAll1 = multipliziereAll2.map(zahl => zahl - 1);
    console.log(subtrahiereAll1);
    return subtrahiereAll1;
})
.then ((subtrahiereAll1: number[])=>{
    const modulo2All = subtrahiereAll1.map(zahl => zahl % 2);
    console.log(modulo2All);
    return modulo2All;
})
.then ((modulo2All: number[])=>{
    console.log(dreiZufallsZahlen);
    console.log(modulo2All);
})
.catch((error: string) => {
    console.log(error);

})
.finally(() => {
console.log('Finished');
});




// const dreiZufallsZahlen:number[] = [];
// const nummernVersprechen : Promise<number[]>= new Promise ((resolve,reject) =>{
//     const ersteZufallsNummerZwischen1Und130 = Math.ceil(Math.random() * 130)
//     const zweiteZufallsNummerZwischen1Und130 = Math.ceil(Math.random() * 130)
//     const dritteZufallsNummerZwischen1Und130 = Math.ceil(Math.random() * 130)
//     // dreiZufallsZahlen.push(ersteZufallsNummerZwischen1Und130)
//     // dreiZufallsZahlen.push(zweiteZufallsNummerZwischen1Und130)
//     // dreiZufallsZahlen.push(dritteZufallsNummerZwischen1Und130)
    
//     dreiZufallsZahlen.forEach(zahl => {
//         if(zahl<=100){
//             dreiZufallsZahlen.push(ersteZufallsNummerZwischen1Und130)
//             dreiZufallsZahlen.push(zweiteZufallsNummerZwischen1Und130)
//             dreiZufallsZahlen.push(dritteZufallsNummerZwischen1Und130)
//             resolve (dreiZufallsZahlen)
//          }else {
//             reject('die Zahl ist größer als 100');
//           }
//     });
    
    
// })

// nummernVersprechen
// .then ((dreiZufallsZahlen: number[])=>{
//     const addierte7Dazu = dreiZufallsZahlen.map(zahl => zahl + 7);
//     console.log(addierte7Dazu);
//     return addierte7Dazu;
// })
// .then ((addierte7Dazu: number[])=>{
//     const multipliziereAll2 = addierte7Dazu.map(zahl => zahl * 2);
//     console.log(multipliziereAll2);
//     return multipliziereAll2;
// })
// .then ((multipliziereAll2: number[])=>{
//     const subtrahiereAll1 = multipliziereAll2.map(zahl => zahl - 1);
//     console.log(subtrahiereAll1);
//     return subtrahiereAll1;
// })
// .then ((subtrahiereAll1: number[])=>{
//     const modulo2All = subtrahiereAll1.map(zahl => zahl % 2);
//     console.log(modulo2All);
//     return modulo2All;
// })
// .then ((modulo2All: number[])=>{
//     console.log(dreiZufallsZahlen);
//     console.log(modulo2All);
// })
// .catch((error: string) => {
//     console.log(error);

// })
// .finally(() => {
// console.log('Finished');
// });

