
// - Lass dir jeweils das erzeugte Objekt in der Konsole ausgeben



// // - Lege einen Typ Monster mit folgenden Eigenschaften an
// // name, type, health, strength, speed
// // - Alle Eigenschaften sind Pflicht (nicht optional)
// // - Überlege dir selbst, welche Datentypen hierfür sinnvoll sein könnten

type Monster = {name: string, type: string, health: number, strength: number, speed: number}


// // - Erstelle ein Funktion createMonster, die ein Monster erzeugt und zurückgibt
// // - name und type müssen immer an die Funktion übergeben werden
// // - Erstelle ein Funktion createMonster, die ein Monster erzeugt und zurückgibt
// // - name und type müssen immer an die Funktion übergeben werden
// // - werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden
// //     - health = 100
// //     - strength = 50
// //     - speed = 25

function createMonster(name: string, type: string, health: number = 100, strength: number = 50, speed: number = 25): string {
    const monsterExample = `${name}, ${type}, ${health}, ${strength}, ${speed}`;
    // const monsterExample = {name, type, health, strength, speed}
    return monsterExample;
}


// - Lege mit Hilfe der Funktion mehrere Monster an, gibt dabei
//     - 2 Parameter
//     - 3 Parameter
//     - 4 Parameter
//     - 5 Parameter

createMonster('pizzaMonster','essensKreatur');
console.log(createMonster('pizzamonster','essensKreatur'));

createMonster('hummelMonster','luftKreatur', 5);
console.log(createMonster('pizzamonster','essensKreatur'));

createMonster('seepferdchenMonster','meeresKreatur', 45, 60);
console.log(createMonster('seepferdchenMonster','meeresKreatur', 45, 60));

createMonster('pfingsrosenMonster','pflanzenKreatur', 85, 40, 15);
console.log(createMonster('pfingsrosenMonster','pflanzenKreatur', 85, 40, 15));

console.log("hallo");
    







