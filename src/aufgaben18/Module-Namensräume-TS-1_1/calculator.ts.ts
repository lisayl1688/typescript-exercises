// - Erstelle zwei TypeScript-Dateien app.ts und calculator.ts
// - Erstelle in der calculator.ts eine Funktion namens addFive, die zu einer als Parameter übergebenen Zahl 5 dazuaddiert und das Ergebnis zurückgibt
// - Exportiere die Methode mit ihrem Namen
// - Importiere die Funktion in der app.ts
// - Rufe die Funktion 3x mit beliebigen Zahlen auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden.


const addFive = (Zahl: number) => {
    let ergebnis = Zahl + 5;
    return ergebnis;
}


export {addFive};