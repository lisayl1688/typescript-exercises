// * Streaming App - alle 90 Minuten fragen, ob die Person noch weiterschaut
// ? wenn nein - Pausieren auf die Konsole
// ? wenn ja - Weiterschauen auf die Konsole
// ? Antwort, ob ja oder nein nach Zufallsprinzip
// ? wenn drei mal hintereinander nein als Antwort kommt - App schließen auf Konsole loggen
function yesOrNo(): boolean {
  // ? wenn Zufallszahl >= 0.5 true sonst false
  const yes = Math.random() >= 0.5;
  return yes;
}
function wakeMeUp() {
  let sleepingCounter = 0;
  const interval = setInterval(() => {
    console.log('Are you still watching?');
    const isStillWatching = yesOrNo();
    console.log(isStillWatching);
    // ? ist schon selbst true oder false

    if (/* Ausdruck, der ausgewertet wird */ true) {
      // * Code, der ausgeführt wird, wenn der Ausdruck true ist
      // * hier springe ich rein, wenn die Bedingung wahr ist
    } else {
      // * Code, der ausgeführt wird, wenn der Ausdruck false ist
      // * hier springe ich rein, wenn die Bedingung nicht wahr ist
    }

    // ? wenn ich es nicht hinschreibe, ist es true
    //if (isStillWatching === true) { kann man alternativ schreiben
    if (isStillWatching) {
      console.log('Continue watching.');
      // ? Zurücksetzen, wenn man einmal wieder wach war
      sleepingCounter = 0;
    } else {
      console.log('Pause the video');
      sleepingCounter++;
      if (sleepingCounter === 3) {
        clearInterval(interval);
        console.log('Closing the app');
      }
    }
    // ? * 1000 um von Millisekunden in Sekunden umzurechnen, * 60 um von Sekunden in Minuten umzurechnen, * 90 für 90 Minuten
    //}, 1000 * 60 * 90);
  }, 1000);
}

// if (isStillWatching === false) {
//     console.log('Pause the video');
//     sleepingCounter++;
//     if (sleepingCounter === 3) {
//       clearInterval(interval);
//       console.log('Closing the app');
//     }
// } else {
//     console.log('Continue watching.');
//     // ? Zurücksetzen, wenn man einmal wieder wach war
//     sleepingCounter = 0;
// }
wakeMeUp();
