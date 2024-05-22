// - Schreibe drei Funktionen, die beim Anklicken des Buttons den Style ändern.
// - **Bitte halte dich an den Typescript-Standard.**
// - Der HTML und CSS-Code ist vorgegeben (siehe Code-Snippet).
// - Nutze für die Aufgabe:
//     - classList
//     - transition-property
//     - transition-duration
//     - text-shadow


// <button id="smallButton">Small</button>
// <button id="middleButton">Middle</button>
// <button id="bigButton">Big & Crazy</button>

// <div class="wrapper">
//   <div id="element" class="small">
//     <h1>Hallo classList!</h1>
//   </div>
// </div>

const smallButton = document.getElementById('smallButton') as HTMLButtonElement;
const middleButton = document.getElementById('middleButton') as HTMLButtonElement;
const bigButton = document.getElementById('bigButton') as HTMLButtonElement;
const helloClassListElement = document.getElementById('element') as HTMLDivElement;

smallButton?.addEventListener('click', () => {
    helloClassListElement.classList.add('smallButton');
});
middleButton?.addEventListener('click', () => {
    helloClassListElement.classList.add('middleButton');
});
bigButton?.addEventListener('click', () => {
    helloClassListElement.classList.add('bigButton');
});