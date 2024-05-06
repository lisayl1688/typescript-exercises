console.clear();

// ? getElementById
// ? wir holen uns das Element mit der id content
const contentElement = document.getElementById('content');
if (contentElement) {
  contentElement.innerHTML = 'Hello World';
  contentElement.style.color = 'red';
}

// ? querySelector
// ? wir holen uns das Element mit der class .darkBox
const darkBoxElement = document.querySelector('.darkBox');
if (darkBoxElement) {
  darkBoxElement.innerHTML = 'Hello World2';
}

// ? Pop-up Fenster im Broser öffnen
window.alert('Achtung Achtung!');

// ? Pop-up Fenster mit Eingabefeld im Broser öffnen
const ageUserInput = window.prompt('How old are you?');
console.log(ageUserInput);

// ? Pop-up Fenster mit OK und Abbrechen im Broser öffnen
const confirmed = window.confirm('Ich habe die Datenschutzerklärung gelesen');
console.log(confirmed);

// ? document.write - direkt ins Html-Dokument schreiben
// ! Achtung: alles wir überschrieben
document.open();
document.write('alles wird überschrieben<br> ');
document.write('zweite Zeile');
document.close();
