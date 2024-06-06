// - Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
// - Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”
// - Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
// - die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt
// - Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden
// - Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

import SchoolClass from "./OOP-Class-TS-Level-1_2";


export{};


const elefantenKlasse : SchoolClass = new SchoolClass("gruppe","elefanten");
const mäuseKlasse : SchoolClass = new SchoolClass("gruppe","mäuse");
const drachenKlasse : SchoolClass = new SchoolClass("gruppe","drachen");


console.log(elefantenKlasse);
elefantenKlasse.name = "nilpferde";
console.log(elefantenKlasse);

console.log(mäuseKlasse);
mäuseKlasse.name = "ratten";
console.log(mäuseKlasse);

console.log(drachenKlasse);
