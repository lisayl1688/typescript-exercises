// * Wann wird dieser Code aufgerufen?
// ? Der Code wir an der Stelle aufgerufen, wo der script-Tag im HTML liegt
// ? Der Code wird nur einmal aufgerufen, wenn die Seite fruits.html geladen wird
console.log('Hello from fruits.ts');

// * Wann lege ich Elemente in der HTML-Datei an und wann im TypeScript Code?
// ? Alles was fest und unveränderlich ist: direkt HTML-File hier fruits.html, z. B. die Überschrift
// ? Alles was dynamisch ist, bzw. sich ändern kann, erzeugen wir im TypeScript Code

// ? wir wollen die Früchte-Button dynamisch erzeugen, um sehr flexibel zu sein

// * 1. Die nötigen Daten erzeugen oder abholen
// * Ein Array von Frucht-Objekten, die einem bestimmten Typ entsprechen
// ? Typ Fruchtbutton
// ? Type-Definition immer mit Semikolon/Strichpunkt getrennt
type FruitButton = { name: string; emoji: string; color: string };

const fruitButtons: FruitButton[] = [
  { name: 'Apple', color: '#ff0800', emoji: '🍎' },
  { name: 'Banana', color: '#ffe135', emoji: '🍌' },
  { name: 'Grapes', color: '#6f2da8', emoji: '🍇' },
  { name: 'Orange', color: '#ffa500', emoji: '🍊' },
  { name: 'Strawberry', color: '#fc5a8d', emoji: '🍓' },
  { name: 'Watermelon', color: '#fc6c85', emoji: '🍉' },
  { name: 'Lemon', color: 'yellow', emoji: '🍉' }
];

// * 2. Die nötigen Elemente aus dem HTML herausholen
// * Welche Möglichkeiten habe ich, um mir Elemente aus dem HTML herauszuholen?
// ? getElementById - mit der id, die ich im html verwendet habe
// ? ich will immer auf dieses Element im Code zugreifen können, deshalb speichere ich es mir
// ? in einer Variable
// ? wenn ich Eigenschaften aus dem DivElement brauche, kann ich es mit as in ein HTMLDivElement umwandeln
// ? wir brauchen das momentan hauptsächlich bei Input und Select, um auf die .value-Eigenschaft zuzugreifen
const fruitListElement = document.getElementById('fruit-list') as HTMLDivElement;

// ? querySelector
// ? holt sich nur das erste Element, auf das die Bedingung zutrifft
// ? kann mit der css-Syntax - mit Art des Zugriffs umgehen
const fruitListELementWithQuery = document.querySelector('.fruits');

// ? Zugriff über div-Element
const fruitListElementWithDiv = document.querySelector('div');

// ? querySelectorAll
// ? holt sich alle Element, auf die die Bedingung zutrifft
const allDivElements = document.querySelectorAll('div');

// * 3. Daten darstellen
// ? immer eine Funktion anlegen, die die Daten darstellt
// ? wird meinstens mehrfach verwendet und macht den Code lesbarer
function renderFruit(): void {
  // ? am Anfang in der render-Methode alles leer/zurücksetzen
  // ? Elvis-Operator hier nicht möglich, weil linke Seite von =, deshalb mit if
  if (fruitListElement) {
    fruitListElement.innerHTML = '';
  }
  fruitButtons.forEach((fruitButton: FruitButton, index: number) => {
    // ? bei createElement kann ich alle HTML-Elemente erzeugen
    const fruitButtonToCreate = document.createElement('button');
    fruitButtonToCreate.style.backgroundColor = fruitButton.color;
    // ? CSS-Klasse aus dem CSS-File zum Button hinzufügen
    // ? CSS-Eigenschaften am bestem im CSS-File festlegen und dann mit classList hinzufügen
    fruitButtonToCreate.classList.add('fruit-item');
    //fruitButtonToCreate.innerText => nur zum Text setzen
    //fruitButtonToCreate.innerHTML =>
    // ? innerHTML verwenden, wenn man mehr als nur Text setzen möchte - auch Tags etc.
    // ? oder immer innerHTML verwenden, das kann beides
    fruitButtonToCreate.innerText = `${fruitButton.emoji} ${fruitButton.name}`;
    // ? so könnte ich eine eindeutige id pro Button festlegen
    fruitButtonToCreate.setAttribute('id', index.toString());

    // ? wir wollen gleich einen EventListener mit generieren, der beim Klick das untere
    // ? Ergebnis verändert
    // ? wir reagieren auf den Klick des jeweiligen Buttons
    const selectedFruitElement = document.getElementById('selected-fruit');
    // ? nur wenn es das Element gibt, muss ich auch auf die Klicks
    if (selectedFruitElement) {
      // ? bei jedem einzelnen Button auf Klick reagieren
      fruitButtonToCreate.addEventListener('click', () => {
        // ? in die untere Überschrift das Emoji und den Namen der Frucht schreiben
        selectedFruitElement.innerHTML = `You picked: ${fruitButton.emoji} ${fruitButton.name}`;
      });
    }

    // ? wir müssen die erzeugten Element auch irgendwo im HTML einhängen, damit sie angezeigt werden
    fruitListElement?.appendChild(fruitButtonToCreate);
  });
}

renderFruit();

// * Age mit input
// ? mit getElementById kommt ein HTMLElement zurück und nicht das konkrete HTMLInputElement
const ageInputElement = document.getElementById('age-input');
const ageOutElement = document.getElementById('age-output');
const showAgeButton = document.getElementById('show-age-button');
const resetAgeButton = document.getElementById('reset-age-button');

// ? nur wenn bei Elemente im HTML da sind, führe die Logik aus
if (ageInputElement && ageOutElement && showAgeButton && resetAgeButton) {
  // ? den aktuellen eingegeben Wert aus einem Input bekomme ich über die Eigenschaft .value
  // ? um auf value zuzugreifen, muss das Element in ein Inputelement umwandeln
  const ageInputAsRealInputElement = ageInputElement as HTMLInputElement;
  // ? nur beim Klick auf den Show age button, soll das Ergebnis upgedated werden
  showAgeButton.addEventListener('click', () => {
    ageOutElement.innerHTML = `Dein Alter ist ${ageInputAsRealInputElement.value}`;
  });

  resetAgeButton.addEventListener('click', () => {
    ageInputAsRealInputElement.value = '';
    ageOutElement.innerHTML = 'Kein Alter eingegeben';
  });
}