// Lernziel: Anwendung von Exclude

// - Lege eine neue Datei an colors.ts an
// - Erstelle dort einen neuen Type BasicColors mit den möglichen Werten:
// RED, BLUE, GREEN, YELLOW, BLACK, WHITE
// - Erstelle einen weiteren Type RealColors auf Basis von BasicColors mit Exclude
// - Werte RED, BLUE, GREEN, YELLOW
// - Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an
// - Gib dort die Farbe auf der Konsole aus
// - Versuche ‘BLACK’ zu übergeben
// - Übergebe einen gültigen Wert

type BasicColors = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'BLACK' | 'WHITE';

type RealColors = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW';

function showColors (colors :RealColors) {
    console.log(colors);
    
}
//Argument of type '"BLACK"' is not assignable to parameter of type 'RealColors'.
// showColors('BLACK')

showColors('BLUE');
