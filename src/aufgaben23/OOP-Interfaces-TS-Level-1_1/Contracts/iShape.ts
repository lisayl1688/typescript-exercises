// - Erstelle einen Ordner contracts
// - Erstelle ein Interface IShape mit den Eigenschaften
//     - name: string
//     - color: string
// - Lege eine Klasse Circle an, die IShape implementiert
// - Die Klasse soll die zusätzliche Eigenschaft haben
//     - radius: number
// - Außerdem gibt es die Methode public Methode draw, die auf der Konsole “Drawing circle” ausgibt
// - Lege drei Instanzen von Circle an, der name ist immer ‘circle’

import Rectangle from "../retangle";



interface IShape {
    name: string;
    color: string;
    isRound : boolean;


    draw: () => void;
}

export default IShape;