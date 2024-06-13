export {};
// * Timing bzw. Zeitgeberfunktionen, die uns das BOM zur Verfügung stellt
// ? es gibt zwei, die wir nutzen können

// * man kann eine Zeit definieren, nach der etwas ausgeführt wird
// ? mache nach 2 Sekunden xy
// ? 1. Parameter: die Funktion/Callback, der ausgeführt wird
// ? 2. Parameter: die Anzahl in Millisekunden, wann das passieren soll
// ? 2000 Millisekunden = 2 Sekunden
 

// ? Wann wird das verwendet?
// ? Netflix: wann nach 3 Stunden keine Interaktion: Frage "Schauen sie noch"
// ? Rufe eine Schnittstelle/Server auf und bekomme nach 60 Sekunden immer noch
// ? keine Antwort kommt: Anzeige "Hier ist etwas schiefgelaufen"/
// ? "Server nicht erreichbar"
window.setTimeout(() => {
  // window.alert('Schauen sie noch weiter Netflix?');
}, 5000);
// clearTimeout() - aufräumen wäre sauber, muss aber nicht passieren
// ? Alternative Schreibweise zur anonymen Funktion
// ! hier ohne runde Klammern - nur den Namen von der Funktion
window.setTimeout(showError, 3000);

function showError() {
  console.log('Server ist nicht verfügbar');
}

// * man kann eine Zeit definieren, nach der etwas immer wieder ausgeführt wird
// ? mache alle Sekunden xy
// ? 1. Parameter: die Funktion/Callback, der ausgeführt wird
// ? 2. Parameter: die Anzahl in Millisekunden, wann das der Code immer wieder
// ? ausgeführt wird
// window.setInterval(() => {
//   console.log('Schon wieder 2 Sekunden vorbei');
// }, 2000);

// * ich will alle 2 Sekunden was auf die Console und nach 10x aufhören
let counter = 0;
// ? ich muss das Interval einer Variablen zuweisen, damit ich es später
// ? mit clearInterval wieder eindeutig löschen kann
// ! immer daran denken, das Interval aufzuräumen, sonst läuft das im
// ! Hintergrund
const interval1 = window.setInterval(() => {
  counter++;
  if (counter < 5) {
    console.log('2 Sekunden um');
  } else {
    // ? löscht das komplette Intervall -> bricht damit das Ticken im Hintergrund ab
    clearInterval(interval1);
  }
}, 2000);

// ? nach einer Minute, d. h. 60 x 1 Sekunden
window.setInterval(() => {
  console.log('Time is ticking');
}, 60 * 1000);

// ? wo verwende ich das in der Realität
// ? alle 2 Sekunden prüfen, ob noch Internetverbindung besteht
// ? Statistiken auf der Startseite alle 5 Sekunden aktualisieren
// ? alle 4 Stunden prüfen, ob es Updates auf dem Server
// ? für Ladefortschritt, wenn echte Dauer nicht bekannt

// ? jede Sekunde soll der Countdown um eins nach unten gezählt werden
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
  countdownElement.style.fontSize = '4rem';
  let counter = 10;
  const interval = window.setInterval(() => {
    // ? counter um eins nach unten zählen
    countdownElement.innerHTML = counter.toString();
    counter--;
    // ? bei 0 aufhören und das ganze Interval abbrechen
    if (counter === 0) {
      countdownElement.innerHTML = '💥';
      clearInterval(interval);
    }
  }, 1000);
}
