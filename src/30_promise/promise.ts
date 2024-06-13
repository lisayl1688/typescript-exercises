console.log('promise.ts');

// * Promise = Versprechen, das in der Zukunft eingelöst wird

// * ein neuer Promise wird immer mit new Promise angelegt
// ? dann kommen immer runde Klammern in denen zuerst resolve und dann reject steht
// ? dann kommt der Arrow und dann in geschweiften Klammern die Logik
// ? resolve rufen wir auf, wenn das Versprechen erfolgreich eingelöst wird
// ? reject rufen wir auf, wenn das Versprechen nicht eingelöst werden kann
// ? ich merke mir den Promise immer in einer Variablen, weil ich ja später darauf zugreifen will
// ? resolve und reject sind Funktionen, die dann innerhalb der Promise-Logik aufgerufen werden
// ! in einem Promise muss ich immer resolve und reject aufrufen - sonst hängt das Versprechen für immer in der Luft
// ? wir könnten resolve und reject auch theoretisch anders nennen, es ist aber eine Konvention das auch immer so zu nennen
const chocolatePromise = new Promise((resolve, reject) => {
  // * Logik für den Promise
  // ? wir wollen nach dem Zufallsprinzip festlegen, ob die chocolateBons verfügbar sind
  const chocolateBonsAreAvailable: boolean = Math.random() >= 0.5;

  if (chocolateBonsAreAvailable) {
    // ? ich kann das Versprechen erfolgreich einlösen
    // ? ich resolve das Promise und gebe true heraus
    // ? ich rufe die resolve-Funktion auf und gebe aus dem Promise das Ergebnis true zurück
    // ? wie return in normalen Funktionen - nur hier muss ich es mit resolve schreiben
    resolve(true);
  } else {
    // ? ich kann das Versprechen nicht erfolgreich einlösen - ich lehne es ab
    // ? ich rufe die reject-Funktion auf und gebe aus dem Promise das Ergebnis false zurück
    // ! bei reject eigentlich meistens mit Fehlertext
    reject('No chocolate available');
  }
});

// * wie kann ich mich an dieses Versprechen, diesen Promise dranhängen
// * die Seite des Kindes, die auf die Einlösung des Versprechens wartet
// * wir schreiben hier die Logik, die passieren soll, wenn das Versprechen eingelöst oder abgelehnt wird

// ? Grundaufbau: promise.then = was passiert, wenn resolve aufgerufen wird, d. h. wenn das Versprechen erfolgreich war
// ? promise.catch = was passiert, wenn reject aufgerufen wurde, d. h. wenn das Versprechen nicht eingelöst werden kann
// ? promise.finally = was passiert immer am Ende
// ! chocolatePromise.then(() => {}).catch(() => {}).finally(() => {});

chocolatePromise
  // ? was mache ich, wenn das Versprechen eingelöst wird
  // ! ich lande entweder im then oder catch-Block
  // ! bei resolve -> then
  // ! bei reject -> catch
  .then(() => {
    // ? hier in diesen Code-Block komme ich rein, wenn im Promise resolve aufgerufen wird
    console.log('-- Resolved --');
    console.log('Open bag...');
    console.log('Eat them all...');
  })
  .catch(() => {
    // ? hier in diesen Code-Block komme ich rein, wenn im Promise reject aufgerufen wird
    console.log('-- Rejected --');
    console.log('Cry out loud...');
  })
  // ? finally muss ich nicht immer schreiben, kann aber gut nutzen, um z. B. am Ende aufräumen
  // ? oder irgendwas zu tun was sowohl beim Einlösen als auch beim Ablehnen getan werden soll
  // ! hier lande ich am Ende immer
  .finally(() => {
    console.log('-- Finally --');
    console.log('Anyway, Mommy is home...');
  });

// * Versprechen, dass das zufällige Alter eines Hundes zurückgegeben wird
// ? Datentyp Promise<number> -> es ist ein Promise, der eine Zahl (number) zurückgibt
// ? in die eckigen Klammern kommt immer der Datentyp
const dogAgePromise: Promise<number> = new Promise((resolve, reject) => {
  const randomAge = Math.floor(Math.random() * 30);
  if (randomAge <= 20) {
    // ? ich gebe hier als Ergebnis eine number zurück aus dem Promise
    resolve(randomAge);
  } else {
    reject('No dog age available');
  }
});

// ? ich hänge mich an das dogAge Versprechen
// ! im then- und catch-Block haben wir den Rückgabewert als Parameter zur Verfügung
// ! und können dann damit weiterarbeiten ähnlich wie beim Rückgabewert einer normalen Funktion.
// ! d. h. die Sachen, die bei resolve und reject rausgegeben wurde, bekomme ich als Parameter in then und catch mitgegeben
dogAgePromise
  // ? weil ich oben ein Promise vom Typ number angelegt habe, kann ich hier das Ergebnis, das mit resolve
  // ? zurückgegeben wird als Parameter bei then reinschreiben und verarbeiten
  // ? hier steht dann das randomAge drin
  // ? Schritt 1: Logging
  .then((ageResult: number) => {
    // ? Ergebnis von resolve auf der Konsole ausgeben
    console.log('The dog is: ', ageResult);
    // ? wir müssen hier return machen, damit der Wert in den nächsten Verarbeitungsschritt, also ins nächsten then übergeben wird
    return ageResult;
  })
  // * mit then-chaining kann ich mehrere Verarbeitsschritte für das Ergebnis schon lesbar aneinanderhängen
  // * ich habe dann mehrere then-Blöcke, bei denen jeweils das Ergebnis aus dem vorherigen Schritt weiterverarbeitet wird
  // ? Schritt 2: in Menschenjahre umrechnen
  .then((age: number) => {
    const humanAge = age * 7;
    console.log('Human age: ', humanAge);
    return humanAge;
  })
  // ? Schritt 3: zurückgeben: Hund ist jung oder alt
  .then((humanAge: number) => {
    if (humanAge > 60) {
      console.log('Dog is older');
    } else {
      console.log('Dog is relatively young');
    }
  })
  .catch((error: string) => {
    // ? im error steht der Text, den wir bei reject mitgegeben haben
    console.log(error);
  })
  .finally(() => {
    console.log('Finished with dog age');
  });
