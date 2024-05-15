let counter2 = 0;

// * Wir holen uns die Elemente counter und button-count
// * Werden sie nicht gefunden, wird ein neues HTMLElement angelegt
// * die zwei Fragezeichen sind eine Kurzschreibweise des Ternary Operators
const counterElement2 = document.getElementById('counter') ?? new HTMLElement();
const buttonElement2 = document.getElementById('button-count') ?? new HTMLElement();

function handleCountButtonClicked2(event: MouseEvent) {
  event.preventDefault();
  counter2++;
  counterElement2.textContent = counter2.toString();
}

buttonElement2.addEventListener('click', handleCountButtonClicked2);