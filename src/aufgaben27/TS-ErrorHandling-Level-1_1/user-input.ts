// - Lege eine Datei an: user-input.ts
// - Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.
// - Verwende einen try-catch-Block, um Fehler beim Abrufen des Benutzernamens abzufangen.
// - Wenn der Benutzer einen Namen eingibt, gib eine personalisierte Begrüßung aus, die den Namen des Benutzers verwendet.
// - Wenn ein Fehler auftritt (z. B. wenn der Benutzer den Dialog schließt), gib eine Standardbegrüßung aus.

// - Lege eine Datei an: user-input.ts
// - Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.
// - Werfe selbst einen Fehler, wenn kein Name eingegeben wurde
// - Verwende dann einen try-catch-Block, um diesen Fehler beim Abrufen des Benutzernamens abzufangen.
// - Wenn der Benutzer einen Namen eingibt, gib eine personalisierte Begrüßung aus, die den Namen des Benutzers verwendet.
// - Wenn ein Fehler auftritt (z. B. wenn der Benutzer den Dialog schließt), gib eine Standardbegrüßung aus.



function greetUser (): string|null {
    let username : string| null = window.prompt("geben Sie Ihren Benutzernamen ein")
    if (username == "" || username == null){
        throw new Error('you need to write sth');
    }
    return username;
}



try {
    let username = greetUser()
    console.log(`hello ${username}`);
} catch (error) {
    console.log("der benutzer ist incorrect", error);
}


