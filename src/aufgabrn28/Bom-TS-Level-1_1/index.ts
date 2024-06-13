export{};// - Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
// - Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.
// - **Bitte halte dich an den Typescript-Standard.**

window.setTimeout(() => {
    console.log('ich hoffe das klappt');
  }, 1000);






let counter = 11;
console.log("start: warten für 3 sekunden");
const interval1 = window.setInterval(() => {
    counter--;
    if (counter) {
      console.log(counter);
    }if (counter === 9)  {
      console.log("erledigt. du hast 3 sekunden verschwendet");
    } if (counter === 0) {
        clearInterval(interval1);
        console.log("endlich feierabend");
      }
  }, 1000);