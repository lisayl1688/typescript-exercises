const counterElement = document.getElementById('counter');
let counter = 0;

if (counterElement) {
  function handleCountButtonClicked(event: MouseEvent): void {
    event.preventDefault();
    counter++;
    if (counterElement) {
      counterElement.textContent = counter.toString();
    }
  }
  const buttonElement = document.getElementById('button-count');
  if (buttonElement) {
    // ! wichtig Funktion ohne Klammern - sie wird nur verknüpft
    buttonElement.addEventListener('click', handleCountButtonClicked);
    // buttonElement.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   counter++;
    //   counterElement.textContent = counter.toString();
    // });
  }
}