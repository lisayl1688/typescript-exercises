console.log('bom.ts');

// * über das window-Objekt können wir verschiedenste Informationen
// * zum Browser und der Umgebung bekommen
// * siehe https://developer.mozilla.org/en-US/docs/Web/API/Window?retiredLocale=de

// * window.screen = Eigenschaften des verwendeten Bildschirms
console.log('Aktuelle Bildschirmhöhe in Pixeln', window.screen.height);
console.log('Aktuelle Bildschirmbreite in Pixeln', window.screen.width);

// ? Um responsive Darstellung umzusetzen: Media Queries nutzen
if (window.screen.width < 768) {
  console.log('Du nutzt einen kleinen Bildschirm');
}
// * Verfügbare Bildschirmgröße
console.log('Verfügbare Bildschirmhöhe in Pixeln', window.screen.availHeight);
console.log('Verfügbare Bildschirmbreite in Pixeln', window.screen.availWidth);

// * Farbtiefe = 24bit oder 32bit
console.log('Farbtiefe', window.screen.colorDepth);

console.log('Pixeltiefe', window.screen.pixelDepth);

// ? unterschiedliches Bild anzeigen, je nachdem ob eine hochauflösender Bildschirm
let imageUrl = '';
if (window.screen.colorDepth <= 24) {
  imageUrl = 'https://example.com/low_quality_image.jpg';
} else {
  imageUrl = 'https://example.com/high_quality_image.jpg';
}

// * Browserfenster selbst
// ? verfügbare inner Höhe des aktuellen Browserfensters
console.log('Innere Höhe des Browserfensters', window.innerHeight);
console.log('Innere Breite des Browserfensters', window.innerWidth);

// * Eventlistener hinzufügen, wenn sich die Größe des Fensters ändert
// ? resize Event = Browserfenster wurde vergrößert oder verkleinert
window.addEventListener('resize', () => {
  console.log('Fenstergröße geändert');
  console.log(window.innerWidth);
  console.log(window.innerHeight);
});

// * window.location - Informationen zur aktuellen URL
console.log('Gesamte URL', window.location.href);
console.log('Protokoll', window.location.protocol);
console.log('Hostname', window.location.hostname);
console.log('Port', window.location.port);

// * window.history - Verlauf der Aufrufe
console.log('Länge der History', window.history.length);

// ? ich kann darüber selbst navigieren
// ? durch diesen Aufruf kann ich den Zurück-Button des Browsers selbst anstossen
// ! window.history.back();
// ? ich kann eine eigene kleine Navigation mit vor und zurück-Buttons abbilden
document.getElementById('back-button')?.addEventListener('click', () => {
  window.history.back();
  window.prompt(window.navigator.userAgent);
});
// ? mit forward kann ich den Vorwärts-Button des Browsers simulieren
//window.history.forward();

// * ich kann auch die Info bekommen, welchen Browser der User nutzt
console.log('Browserinfo', window.navigator.userAgent);
if (window.navigator.userAgent.includes('Chrome')) {
  console.log('Wir sind im Chrome Browser und machen deshalb xyz');
}

// * welche Browsersprache ist eingestellt
// ? de-DE
console.log('Aktuelle Sprache des Browsers', window.navigator.language);

if (window.navigator.language.startsWith('de')) {
  // ? verwende die deutschen Spracheinstellungen
}

// * ist der Browser online
console.log('Online', window.navigator.onLine);
