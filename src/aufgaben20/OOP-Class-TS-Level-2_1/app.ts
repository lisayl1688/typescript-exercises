// **a)** Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften: 

// - id
// - firstName
// - lastName
// - birthday

// Überlege dir hierzu selbst die passenden Datentypen.

// **b)** Füge der Klasse SchoolClass ein weiteres Attribut/eine Eigenschaft hinzu, und zwar ein Array aus Personen. 

// **c)** Teste deine Klassen und Methoden in der app.ts. Erstelle eine Schulklasse und füge mehrere Personen hinzu

// d) Lass dir alle Personen aus der Schulklasse ausgeben

// **Tip:** du kannst eine Schleife zur Erstellung von den Personen benutzen.

import SchoolClass from "./klassen";
import schüler from "./schüler";


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

console.log(schüler);




const ersterSchülerElefantenKlasse : schüler = new schüler(4242, "benno", "peters", "10.02.2004")

const zweiterSchülerElefantenKlasse : schüler = new schüler(4452, "emilia", "krause", "23.11.2003")

const dritterSchülerElefantenKlasse : schüler = new schüler(4242, "finn", "berg", "02.05.2004")

elefantenKlasse.schüler.push(ersterSchülerElefantenKlasse);
elefantenKlasse.schüler.push(zweiterSchülerElefantenKlasse);
elefantenKlasse.schüler.push(dritterSchülerElefantenKlasse);
console.log(elefantenKlasse);





const ersterSchülerMäuseKlasse : schüler = new schüler(4242, "tim", "diehle", "13.12.2005")

const zweiterSchülerMäuseKlasse : schüler = new schüler(4452, "hannah", "trott", "16.10.2003")

const dritterSchülerMäuseKlasse : schüler = new schüler(4242, "lea", "krempel", "22.01.2004")

mäuseKlasse.schüler.push(ersterSchülerMäuseKlasse);
mäuseKlasse.schüler.push(zweiterSchülerMäuseKlasse);
mäuseKlasse.schüler.push(dritterSchülerMäuseKlasse);
console.log(mäuseKlasse);




const ersterSchülerdrachenKlasse : schüler = new schüler(4242, "tamara", "krug", "02.12.2004")

const zweiterSchülerdrachenKlasse : schüler = new schüler(4452, "marcel", "ludwig", "06.08.2003")

const dritterSchülerdrachenKlasse : schüler = new schüler(4242, "vanessa", "ehrich", "20.03.2003")

drachenKlasse.schüler.push(ersterSchülerdrachenKlasse);
drachenKlasse.schüler.push(zweiterSchülerdrachenKlasse);
drachenKlasse.schüler.push(dritterSchülerdrachenKlasse);
console.log(drachenKlasse);


const klassenSammlung : SchoolClass []=[elefantenKlasse, mäuseKlasse, drachenKlasse];
const vornamenSammlung :string []=["Thomas", "Maik", "Tina", "Jonas", "Lingling", "Luke", "Arnold", "Tiffany", "Sven", "Lara"];
const nachnamenSammlung : string []=["Koenig", "Schmidt", "Laukoetter", "Schraff", "Werner", "Oeztuerk","Wu", "Alvares", "D'imperio", "Danowski"];
const birthdateSammlung : string[]=["06.06.1997", "20.05.2000", "03.08.2002", "23.09.1996", "25.11.2016", "05.10.1992","01.11.2014", "31.02.1999", "24.12.2000", "10.10.2010"];



   
// const randomVorname : string = vornamenSammlung.random();
const vornamenSammlungLength :number = vornamenSammlung.length;
const nachnamenSammlungLength : number = nachnamenSammlung.length;
const birthdateSammlungLength : number = birthdateSammlung.length;
console.log(vornamenSammlungLength);
console.log(nachnamenSammlungLength);
console.log(birthdateSammlungLength);

for (let index = 1; index < 60; index++) {
    const randomZahl =    Math.floor(Math.random() * vornamenSammlung.length);

    const randomVorname: string = vornamenSammlung[randomZahl];
    // console.log(`Random Vorname = ${randomVorname}`);


    const randomNachname: string = nachnamenSammlung[randomZahl];
    // console.log(`${randomNachname}`);

    const randomBirthdate: string = birthdateSammlung[randomZahl];
    // console.log(`${randomBirthdate}`);

    const randomSchüler : schüler = new schüler(index, randomVorname, randomNachname, randomBirthdate)

    

    const randomKlassen =    Math.floor(Math.random() * klassenSammlung.length);
    const randomKlasse : SchoolClass = klassenSammlung[randomKlassen];


   randomKlasse.schüler.push(randomSchüler);

  console.log(`Schüler ${randomVorname} ${randomNachname} wurde in die ${randomKlasse.name} ${randomKlasse.id} aufgenommen`);
    
}

console.log(klassenSammlung);

