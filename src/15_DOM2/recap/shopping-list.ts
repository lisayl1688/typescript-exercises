console.log('shopping list - hello');

// ? - Schneide vorne und hinten Leerzeichen beim eingegebenen Text ab

// * erstmal alle Element holen
// ? - Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
const inputElement = document.getElementById('inputText') as HTMLInputElement;
const addButton = document.getElementById('add-button');
const listElement = document.getElementById('myList');
const errorOutput = document.getElementById('error-output');

// * Event-Listener anlegen
// ? - Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.
addButton?.addEventListener('click', () => {
  const inputText = inputElement.value;
  // ? - Leider kann man auch leere Eingaben der Liste hinzufügen.
  // ? - Passe deinen Code so an, dass vorher geprüft wird, ob die Eingabe gültig ist und somit leere Eingaben auch nicht hinzugefügt werden können.
  // * immer am besten zuerst die Fehlerbehandlung und dann direkt rausgehen mit return
  if (inputText === '' && errorOutput) {
    errorOutput.innerHTML = 'Shopping Item can not empty';
    return;
  }
  if (errorOutput) {
    errorOutput.innerHTML = '';
  }
  // * eigentlich Logik
  // ? Text zur Liste hinzufügen
  const listItem = document.createElement('li');
  listItem.innerHTML = inputText;

  listElement?.appendChild(listItem);
  // ? - Das Input-Feld soll nach jedem Hinzufügen geleert werden.
  inputElement.value = '';
});

const allExampleElements = document.querySelectorAll('.example');
// * bei querySelectorAll kommt als Ergebnis NodeListOf<Element> - eine Liste von Elementen
// * am besten mit forEach durchgehen, um Event-Listener zu setzten o. ä.
allExampleElements.forEach((exampleElement) => {});