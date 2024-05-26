// - Lernziel: klassische Functions in Arrow-Functions umwandeln.
// - **Bitte halte dich an den Typescript-Standard.**




// - Konvertiere schließlich alle Funktionen in die neue Arrow-Functions Schreibweise.


// - Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.
const hello = document.getElementById('hello') as HTMLElement;

function sayHello(){
 hello.innerHTML = 'hallo';
}
sayHello();
//!
const sayHelloArrow = ()=>{
    hello.innerHTML = 'hallo Arrow';
   }
   sayHelloArrow();
   

// - Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.
const addition2Num = document.getElementById('addition2Num') as HTMLElement;

function added2Num(ersteNummer: number, zweiteNummer: number): number{
 return ersteNummer + zweiteNummer;
}

addition2Num.innerHTML = added2Num(4,5).toString();
//!
const added2NumArrow = (ersteNummer: number, zweiteNummer: number): number =>{
    return ersteNummer + zweiteNummer;
   }
   
   addition2Num.innerHTML = added2NumArrow(5,5).toString();
   

// - Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt
const multiplikation2Num = document.getElementById('multiplikation2Num') as HTMLElement;

function multiplikated2Num(ersteNummer: number, zweiteNummer: number): number{
 return ersteNummer * zweiteNummer;
}

window.alert(multiplikated2Num(4,5).toString());
//!

const multiplikated2NumArrow = (ersteNummer: number, zweiteNummer: number): number =>{
    return ersteNummer * zweiteNummer;
   }
   
   window.alert(multiplikated2NumArrow(4,5).toString());
   


// - Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.
const ente: object = {farbe: 'braun', geschlecht: 'weiblich'};
function einObjektTyp(objekt: object): void {
    console.log(Object.keys(objekt));
}

einObjektTyp(ente)
//!
const einObjektTypArrow = (objekt: object): void => {
    console.log(Object.keys(objekt));
}

einObjektTypArrow(ente)

