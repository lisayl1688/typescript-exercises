let counter = 0;

const counterElement = document.getElementById('counter');
const buttonElement = document.getElementById('button-count');

// * Überprüfung, ob beide Elemente gefunden wurden
if (counterElement && buttonElement) {
  buttonElement.addEventListener('click', handleCountButtonClicked);
} else {
  console.error('counterElement oder buttonElement nicht gefunden!');
}

function handleCountButtonClicked(event: MouseEvent) {
  event.preventDefault();
  counter++;
  if (counterElement) {
    counterElement.textContent = counter.toString();
  }
}