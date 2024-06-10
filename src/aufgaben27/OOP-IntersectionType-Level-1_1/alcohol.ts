// - Lege eine Datei an: alcohol.ts
// - Erstelle dort zwei Types, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.
// - Alcohol hat die Eigenschaften: name, percentage und type
// - Mixer hat die Eigenschaften: name, type und carbonated
// - Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.
// - Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu.
// - Gib die Eigenschaften des Cocktails auf der Konsole aus, um sicherzustellen, dass der Typ korrekt erstellt wurde.

type Alcohol = {name : string, percentage : string, type: string};


type Mixer = {name: string, type : string, carbonated : string};


type Cocktail = {name : string, percentage : string, type: string, carbonated : boolean}

const mojito : Alcohol & Mixer =  {name: "mojito", percentage: "20", carbonated: "false", type: "cocktail"}

console.log(mojito);