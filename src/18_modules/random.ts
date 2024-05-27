
// ? Cannot redeclare block-scoped variable 'fruitButtons', weil es die Variable schon ein einer eigenen Datei gibt
// ! um direkt diese Meldung zu vermeiden d. h. kürzester Weg, wenn ich nichts exportieren will
// ! ich bin in einem abgeschlossenen Unterordner, habe dort z. B. ein kleines Projekt, dann mach ich Folgendes
// * Leerer export {} macht die Datei auch zu einem Modul ohne dass ich tatsächlich was exportiere

export {};
const fruitButtons = [];

// ! sobald ich einmal in einer Datei das Schlüsselwort export verwende, wird daraus ein Modul
// ?  die doppelte Variablen- oder Funktionsnamenprüfung, die über das ganze Projekt geht, ist damit nicht relevant,
// ? weil nur innerhalb des Moduls auf doppelte Namen geprüft wird
// ? d. h. auch diese Zeile würde die Datei zum Modul machen
// * export const fruitButtons = [];
