// - In dieser Übung lernst du [DOM Elements](https://www.w3schools.com/jsref/dom_obj_all.asp) und [Forms Value](https://www.w3schools.com/jsref/prop%5Ftext%5Fvalue.asp) kennen.
// - **Bitte halte dich an den Typescript-Standard.**
// - Beim Anklicken des Buttons sollen die Werte aus dem Formular in der Konsole ausgegeben werden.
// - Der Code ist vorgegeben, siehe Code-Snippet.
// - Definiere einen Typ SimplePerson
// - Lege in der jetzt zusätzlich ein Objekt vom Typ SimplePerson an, das die Werte aus dem Formular erhält
// - Lass dir das Objekt auf der Konsole ausgeben

type SimplePersons = {vorname: string, nachname: string, land: string};


const vornameElement = document.getElementById('vorname') as HTMLInputElement;
const nachnameElement = document.getElementById('nachname')as HTMLInputElement;
const landElement = document.getElementById('land')as HTMLSelectElement;
const buttonSubmit = document.getElementById('buttonSubmit')as HTMLInputElement;

buttonSubmit?.addEventListener('click', (event : Event) => {
    event.preventDefault();
    const vornameValue:string = vornameElement.value
    const nachnameValue:string = nachnameElement.value
    const landValue:string = landElement.value
    let infos : SimplePersons= {vorname:vornameValue, nachname:nachnameValue, land:landValue};
    console.log(infos);
});
