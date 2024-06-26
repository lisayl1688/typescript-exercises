// Lernziel: Anwendung von partial
export {};
// - Lege eine neue Datei tea.ts an
// - Erstelle dort ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime
// - Erstelle dann einen Type PartialTea, das ebenfalls diese Eigenschaften enthält, die aber alle optional sind
// - Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”
// - Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab
// - Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea
// - Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTeas


interface ITea {
    name: string;
    type: string; 
    temperature: number; 
    brewingTime: number;
};

export default ITea;