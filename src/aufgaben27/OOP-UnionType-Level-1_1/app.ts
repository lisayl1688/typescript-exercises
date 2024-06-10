// - Lege eine neue Datei app.ts an
// - Erstelle dort einen Union Type namens Result mit den Werten "success", "error" und "pending"
// - Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu.
// - Schreibe eine Funktion handleResult, die einen Parameter vom Typ Result akzeptiert.
// - Implementiere handleResult so, dass sie je nach übergebenem Wert eine entsprechende Meldung ausgibt.
// - Teste die Funktion, indem du verschiedene Werte an sie übergibst.

type Result = "success" | "error" | "pending";

const firstResult: Result = "success";

function handleResult (result : Result) {
    if (result === "success") {
        console.log("the result was a success");
    } else if ( result === "error"){
        console.log("the result was a error");
    }else{
        console.log("the result was pending");
    }
}

handleResult("success");