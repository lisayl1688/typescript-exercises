// - Lernziel: Verwendung von Event-Listeners, Änderung von DOM-Elementen, Speicherung von Werten in Arrays und Aktualisierung der Anzeige.
// - Erstelle eine Todo-Liste, die es dir ermöglicht, Aufgaben hinzuzufügen, anzuzeigen, als "erledigt" zu markieren und zu löschen.
// - Hinzufügen von Todos:  Schreibe eine Function, um Aufgaben zur Liste hinzuzufügen, wenn der "Add"-Button geklickt wird.
// - Anzeigen von Todos:  Aktualisiere die Anzeige der Todo-Liste im DOM, sobald neue Aufgaben hinzugefügt werden.
// - Markieren von Todos als "erledigt":  Verwende eine Checkbox, um Todos als "erledigt" markieren zu können.
// - Löschen von Todos:  Implementiere die Möglichkeit, Todos aus der Liste zu löschen.
// - **Bitte halte dich an den Typescript-Standard.**

const textfeld = document.getElementById('text') as HTMLInputElement;
const addButtonElement = document.getElementById('addButton') as HTMLButtonElement;
const todoInhaltElement = document.getElementById('todoInhalt') as HTMLUListElement;
addButtonElement?.addEventListener('click', () => {

        let textfeldValue:string = textfeld.value;
        let listElement = document.createElement('li');
        listElement.innerText = textfeldValue;
        todoInhaltElement.appendChild(listElement);
        textfeld.value="";

  });