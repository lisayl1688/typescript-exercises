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

class schüler {
    id : number = 0;
    firstName : String = "";
    lastName : String = "";
    birthday : string = "";

    constructor(id: number, firstName: string, lastName: string, birthday: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}

export default schüler;