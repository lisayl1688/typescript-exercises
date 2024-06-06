//! OOP-Class-TS-Level-2_6
// ? Lege eine Klasse Singer an, die eine Eigenschaft name: string hat
// - Lege 4 Klassen, die von Singer erben, die zusätzlich die Methode sing() haben, die einen String zurückgibt
// - Setze den Namen und gib bei der Methode in jeder Klasse eine bekannte Liedzeile zurück

// ```tsx
// class Beyonce extends Singer {
//     constructor(name: string) {
//        super(name);
//     }
//     sing(): string {
//         return "I'm a survivor, I'm gonna make it!";
//     }
// }
// ```

// - Lege eine Datei app.ts an
// - Schreibe eine Function letsSing in app.ts mit einem Parameter singer
// - Je nach Typ der Klasse soll ein passendes Emoji, das den/die Sänger:in repräsentiert, mit dem Songtext ausgegeben werden, z. B.

// ```tsx
// 👨🏻‍🦱 "Freddy Mercury" sings "We will, we will rock you."
// ```

// - Denk dir etwas aus, was ausgegeben wird, wenn kein passender Klassen-Typ gefunden wird
// - Rufe letsSing für alle Instanzen deiner Klassen auf und lass dir das Ergebnis auf der Konsole ausgeben

import {
    Singer,
    TaylorSwift,
    JohnnyCash,
    HansiHinterseer,
    Adele,
  } from "./singer";
  
  function letsSing(singer: Singer): void {
    if (singer instanceof TaylorSwift) {
      console.log(`👱🏻‍♀️ ${taylor.name} sings ${singer.sing()}`);
    } else if (singer instanceof JohnnyCash) {
      console.log(`💀 ${johnny.name} sings ${singer.sing()}`);
    } else if (singer instanceof HansiHinterseer) {
      console.log(`👴🏼 ${hansi.name} sings ${singer.sing()}`);
    } else if (singer instanceof Adele) {
      console.log(`👩🏻 ${adele.name} sings ${singer.sing()}`);
    } else {
      console.error("Error");
    }
  }
  
  const taylor = new TaylorSwift("Taylor Swift");
  letsSing(taylor);
  const johnny = new JohnnyCash("Johnny Cash");
  letsSing(johnny);
  const hansi = new HansiHinterseer("Hansi Hinterseer");
  letsSing(hansi);
  const adele = new Adele("Adele");
  letsSing(adele);