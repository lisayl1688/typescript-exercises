// - Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen
// - Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
// - Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau
// - Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00)
// - Lege dir ein Array mit allen Farben an: allColors: Color[]
// - Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe


enum ClothingColor {
    yellow= '#FFFF00',
    Orange = '#FFA500'
}

const allcolors : ClothingColor []=[
    ClothingColor.yellow,
    ClothingColor.Orange
]

const colorButtonsOutput = document.getElementById('color-buttons');
if (colorButtonsOutput) {
    allcolors.forEach((color: ClothingColor)=> {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        colorButtonsOutput.appendChild(button);
    })
}
 


