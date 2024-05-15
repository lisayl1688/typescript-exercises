// * Alle Elemente sich aus dem HTML holen
const countInputElement = document.getElementById('count-input') as HTMLInputElement;
const loopButton = document.getElementById('loop-button');
const loopOutput = document.getElementById('loop-output');

// * EventListener für Button
function handleLoopButtonClicked(event: Event) {
  event.preventDefault();
  console.log('Button clicked');
  // ? Anzahl aus Input-Feld holen
  if (countInputElement.value) {
    // ? Wort zusammenbauen
    const count = Number(countInputElement.value);
    console.log(count);
    let oString = '';
    for (let index = 0; index < count; index++) {
      oString = oString + 'o';
    }

    // ? Wort im Output-Feld ausgeben
    if (loopOutput) {
      loopOutput.style.color = 'green';
      loopOutput.innerHTML = 'L' + oString + 'p';
      // ? Alternative ohne for-Schleife direkt mit repeat
      //loopOutput.innerHTML = 'L' + 'o'.repeat(count) + 'p'
    }
  }
}
if (loopButton) {
  loopButton.addEventListener('click', handleLoopButtonClicked);
  //   loopButton.addEventListener('click', (event: Event) => {
  //     event.preventDefault();
  //      Logik
  //   });
}