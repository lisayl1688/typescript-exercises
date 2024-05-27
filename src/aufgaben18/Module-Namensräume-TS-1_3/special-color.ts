// - Erstelle drei TypeScript-Dateien app.ts, special-color.ts und random-color-generator.ts
// - Die Datei special-color.ts soll ein Enum mit 10 beliebigen Farbnamen enthalten und per default exportieren
// - Die Datei random-color-generator.ts soll eine Funktion randomColorGenerator() enthalten und per default exportieren
// - Die Funktion soll zufällig eine der Farben aus dem Enum zurückgeben
// (Tipp: Math.random)
// - Importiere die Funktion unter dem Namen getRandomColor() in der app.ts
// - Rufe die Funktion mehrfach auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden.

enum colors {
    rot = "rot",
    blau = "blau",
    grün = "grün",
    gelb = "gelb",
    lila = "lila",
    pink = "pink",
    türkis = "türkis",
    orange = "orange",
    braun = "braun", 
    olive = "olive"
  }

  export default colors;