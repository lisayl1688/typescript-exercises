// - Lege eine Datei app.ts an
// - Rufe die Methode InstanceChecker.isUnicorn mit einem leeren Objekt auf und lass dir das Ergebnis auf der Konsole ausgeben
// - Erstelle eine Instanz der Klasse Unicorn
// - Rufe die Methode InstanceChecker.isUnicorn dieser Instanz auf und lass dir das Ergebnis auf der Konsole ausgeben

import InstanceChecker from "./instance-checker";
import unicorn from "./unicorn";
const leeresObject ={};
console.log(InstanceChecker.isUnicorn(leeresObject));

const unicorni = new unicorn ();
unicorni.name = "albert";
unicorni.colors = ["lila"];
console.log(InstanceChecker.isUnicorn(unicorni));
