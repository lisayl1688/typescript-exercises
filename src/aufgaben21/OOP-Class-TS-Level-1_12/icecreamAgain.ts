// - Wir bauen auf der Klasse IceCreamFlavors [OOP-Class-TS-Level-1_1](https://www.notion.so/OOP-Class-TS-Level-1_1-4ba7a4c6beb746a89d3faf3c30f6ec7e?pvs=21) auf
// - Die Klasse soll drei Methoden bekommen
//     - getTotalPrice(numberOfScoops: number)
//     → gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus
//     - printInfo()
//     → gibt z. B. Folgendes auf der Konsole aus
    
//     ```tsx
//     'Flavor Vanilla is popular and costs 2.10 Euro.'
//     ```
    
// - Rufe die Methode bei deinen bereits bestehenden Instanzen von IceCreamFlavor auf



class IceCreamFlavor {
    name: string = "";
    price: number = 0;
    isPopular: boolean = false;
    description?: string = undefined;
    numberOfScoops :number = 0;

    getTotalPrice(numberOfScoops: number)  {
        let Gesamtpreis = numberOfScoops * this.price;
        return Gesamtpreis;
    }

    printInfo() {
        let popularity = "";
        if (this.isPopular = true) {
         popularity = "popular"
        }else if (this.isPopular = false){
         popularity = "not popular"
        }

        let gesamtInfoText = `Flavor ${this.name} is ${popularity} and costs ${this.price} Euro.`
        return gesamtInfoText;
    }
    

    getLengthOfDescription(){
        if (this.description){
            let descriptionLength = this.description.length
            return descriptionLength;
        } else {
            return 0;
        }

    }
// → gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist
}

export default IceCreamFlavor;