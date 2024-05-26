


// - Validiere dein HTML auf Korrektheit.
// - Lege dann eine zweite Person mit den gleichen Eigenschaften aber anderen Werten an
// - Die 2. Person soll ebenfalls eine Funktion zeigeProfil habe, die aber dieses Mal als Arrow-Function definiert ist -->


const mensch = document.getElementById('person') as HTMLElement;


let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
         return `Vorname:${this.vorname}, Nachname:${this.nachname}, alter:${this.alter},  familienstand:${this.familienstand},  groesse:${this.groesse}`;
     }
 };

 console.log(person.zeigeProfil());

// <!-- - Baue in der Function zeigeProfil deines Objektes die Ausgabe aller Werte der Person ein


let person2 = {
    vorname: 'Maria',
    nachname: 'Ente',
    alter: 24,
    familienstand: 'ledig',
    groesse: 1.58,
    zeigeProfil : () =>{
         return `Vorname:${this.vorname}, Nachname:${this.nachname}, alter:${this.alter},  familienstand:${this.familienstand},  groesse:${this.groesse}`;
     }
 };

 console.log(person2.zeigeProfil());


