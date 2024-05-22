
console.log('events.ts');

const clickButton = document.getElementById('click-button');
// ? in der Arrowfunction kann ich als Parameter das Event angeben
// ? event kann weggelassen werden, wenn ich gar nicht darauf zugreifen möchte
// ? addEventlistener beginnt mit Ereignis, hier click - dann kommt die Arrow-Function
clickButton?.addEventListener('click', () => {
  console.log('Simple button was clicked');
});

const doubleClickButton = document.getElementById('double-click-button');
// ? wir wollen auf den Doppelklick reagieren
// ? relevantes Ereignis: dblclick
doubleClickButton?.addEventListener('dblclick', () => {
  console.log('Button was double clicked');
});

const hoverDiv = document.getElementById('hover-div');
// ? wir wollen auf das Hovern (mit der Maus drüberfahren) reagieren
// ? mouseover Ereignis für Hovern/Drüberfahren verwenden
// ? lieber sparsam einsetzen, wenn mit viel Logik verbunden - dann lieber Button
hoverDiv?.addEventListener('mouseover', () => {
  console.log('Mouse hovering over div');
});

const focusInput = document.getElementById('focus-input');
// ? wir wollen darauf reagieren, dass der Fokus in das Input gesetzt wurde
// ? focus Ereignis nutzen
// ? wird ausgelöst, wenn ich mit der Maus in das Input-Feld klicke oder auch mit Tab-Taste
// ? hinnavigiere
focusInput?.addEventListener('focus', () => {
  console.log('Focus was set in input');
});

const typeInput = document.getElementById('type-input');
// ? wir wollen darauf reagieren, wenn in dem Inputfeld Text eingegeben wird
// ? bei Tippen jedes einzelnen Buchstabens im Input, wird das Event ausgelöst
typeInput?.addEventListener('input', () => {
  console.log('Text was typed in input');
});

// ? wir wollen darauf reagieren, dass jemand die Checkbox ausgewählt hat
// ? wir müssen hier in eine HTMLInputElement umwandeln, damit wir auf die chechbox.checked
// ? Eigenschaft zugreifen können
const checkbox = document.getElementById('checkbox') as HTMLInputElement;
// ? auch bei Checkbox ist es das change Event
checkbox?.addEventListener('change', () => {
  console.log('Checkbox was checked or unchecked');
  console.log(checkbox.checked);
});

const selectElement = document.getElementById('select-input');
// ? wir wollen darauf reagieren, wenn ein Wert ausgewählt wurde
// ? wir können uns den ausgewählten Wert auf zwei Arten rausholen
// ? Fall 1: über event.target Wert holen
selectElement?.addEventListener('change', (event: Event) => {
  // ? ich hole mir über event.target das Ursprungs-Select-Element und wandel es
  // ? direkt in einem HTMLSelectElement um, damit ich auf die speziellen Eigenschaften
  // ? zugreifen kann
  const select = event.target as HTMLSelectElement;
  // ? der ausgewählte Wert
  console.log('Aktueller Wert im Select: ', select.value);
  // ? der ausgewählte Index
  console.log('Aktueller selektierter Index: ', select.selectedIndex);
  console.log('Different option was selected');
});

// * Wenn ich mir das Element sowieso geholt habe, dann diese Schreibweise
// * unser Standardfall
// ? Fall 2: nicht über event.target sondern direkt auf Element zugreifen
selectElement?.addEventListener('change', () => {
  // ? ich greife direkt auf das Select-Element zu
  const select = selectElement as HTMLSelectElement;
  console.log('Aktueller Wert im Select: ', select.value); 
  console.log('Aktueller selektierter Index: ', select.selectedIndex);
  console.log('Different option was selected');
});

const submitForm = document.getElementById('submit-form');
// ? wir wollen verhindern, dass die ganze Seite neu geladen wird, daher geben
// ? wir hier den Parameter event an
// ? nur dann können wir auch event.preventDefault() aufrufen
submitForm?.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  console.log('Form was submitted');
});

// ? wir wollen, dass beim Klick auf den Google-Link nicht zu Google navigiert wird
// ? sondern nur auf der Konsole geloggt wird
// ? auch hier beim Link verwenden wir das click-Event
const googleLink = document.getElementById('link');
// if (googleLink) {
//   googleLink.setAttribute('href', 'http://duckduckgo.com');
// }

googleLink?.addEventListener('click', (event: Event) => {
  event.preventDefault();
  console.log('Somebody wants to go to google');
});
