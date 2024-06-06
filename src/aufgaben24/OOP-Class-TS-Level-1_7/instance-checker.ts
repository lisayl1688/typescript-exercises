// - Lege eine Datei unicorn.ts
// - Lege dort eine Klasse Unicorn mit den Eigenschaften name: string und colors: string[] an
// - Lege eine Datei instance-checker.ts an
// - Erstelle dort eine Klasse InstanceChecker
// - Lege eine statische Methode isUnicorn an
// - Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any ;)
// - Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse Unicorn ist
// - Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse Unicorn ist

import unicorn from "./unicorn";


class InstanceChecker {
    static isUnicorn(objectToCheck: any){
        if (objectToCheck instanceof unicorn) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

export default InstanceChecker