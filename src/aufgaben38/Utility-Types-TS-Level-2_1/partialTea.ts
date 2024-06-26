import ITea from "./ITea";

// Lernziel: Anwendung von partial
export {};
// - Lege eine neue Datei tea.ts an
// - Erstelle dort ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime
// - Erstelle dann einen Type PartialTea, das ebenfalls diese Eigenschaften enthält, die aber alle optional sind
// - Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”
// - Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab
// - Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea
// - Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTeas



type PartialTea = Partial<ITea>;

function prepareTea (tea: PartialTea) {
console.log(`Preparing ${tea.name} - will be ready in ${tea.brewingTime}`);
if (!tea.name && !tea.brewingTime) {
    console.error(Error);
}
return;
}

const teaObject : ITea ={
    name: "eisTee",
    type: "saft",
    temperature: 0,
    brewingTime: 2,
}

prepareTea(teaObject);


const teaObject2 : PartialTea ={
    name: "eisTee",
    type: "saft",
    temperature: 0,
    brewingTime: 2,
}

prepareTea(teaObject2);