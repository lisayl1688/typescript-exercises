// - Wir bauen auf [callback-TS-Level-1_1](https://www.notion.so/callback-TS-Level-1_1-afa08e7024364c608b4d14715644522c?pvs=21) auf
// - Schreibe ein Funktion showAlert(sum: number)
// - Die Funktion öffnet ein Alert-Window und zeigt dort das Ergebnis an
// - Übergib showAlert als Callback-Funktion an addNumbers

function addNumbers(a: number, b: number, callback:(sum: number)=>void){
    const sum = a+b;
    const result = callback(sum)
    console.log(result);
}

addNumbers(1,2,showAlert);



function showAlert (sum: number) {
window.alert(sum)
}