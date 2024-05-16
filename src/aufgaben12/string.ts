// Tuple-TS-Level-1_1

const starWarsActor : [string, string][] = [['Luke Skywalker', 'Mark Hamill'],['Darth Vader', 'James Earl Jones'],['Yoda', 'Frank Oz'],['Han Solo', 'Harrison Ford'],['Princess Leia', 'Carrie Fisher']];

starWarsActor.forEach((actor) => {
    console.log(`${actor[1]} spielt ${actor[0]}`);
  });
  

//?
// Tuple-TS-Level-2_1
//  ---> zu finden in employee.ts<-----


// //?
// Enum-TS-Level-1_1
export enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

//?
// Enum-TS-Level-1_2
//  ---> zu finden in Pizza.ts<-----

//?
// Enum-TS-Level-2_1
enum HtmlError  {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function showHtmlError() {
    let randomOneToFive = Math.floor(Math.random() * 5);
    console.log('zufallszahl:', randomOneToFive);
    switch (randomOneToFive) {
        case 0:
        case 1:
        case 2:
            console.log(HtmlError.OK);
            break;
        case 3:
            console.log(HtmlError.Redirect);
            break;
        case 4:
            console.log(HtmlError.BadRequest);
            break;
        case 5:
            console.log(HtmlError.InternalServerError);
    }
}

console.log(showHtmlError());
//?
// Enum-TS-Level-2_2
// - Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen
// - Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
// - Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau
// - Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00)
// - Lege dir ein Array mit allen Farben an: allColors: Color[]
// - Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe


//?
// Set-TS-Level-1_1
let starWarsCharacters = new Set <string>();
starWarsCharacters.add('Luke Skywalker');
starWarsCharacters.add('Darth Vader');
starWarsCharacters.add('Obi Wan Kenobi');

console.log(starWarsCharacters);
starWarsCharacters.add('Leia Organa');
console.log(starWarsCharacters);
starWarsCharacters.add('Leia Organa');
console.log(starWarsCharacters);

//?
// Map-TS-Level-1_1
//  ---> zu finden in favoriteBands.ts<-----