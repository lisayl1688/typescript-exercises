// Simulation des alten Spiels “Sie liebt mich, sie liebt mich nicht” 😉

// - Lege eine datei she-loves-me.ts an
// - Erstelle ein Promise vom Typ string
// - Lass dir mit Math.random einen zufälligen boolean-Wert generieren
// - Bei true  “She loves me.” resolved
// - Bei false “She loves me not.” rejected
// - Hänge dich an das Promise
// - Gib im then-Block das Ergebnis auf der Konsole aus
// - Gib im catch-Block das Ergebnis auf der Konsole aus
// - Gib im finally-Block “Now I know what is going on” aus


const doesSheLovesMe: Promise<string> = new Promise((resolve, reject) => {
    const lovesMe: boolean = Math.random() >= 0.2;
  
    if (lovesMe) {
      resolve('She loves me.');
    } else {
      reject('She loves me not.');
    }
  });
  

doesSheLovesMe
.then((herFeelings:string) => {
console.log(herFeelings);
})
.catch((sadtruth: string) => {
console.log(sadtruth);
})
.finally(() => {
console.log('Now I know what is going on');
});

