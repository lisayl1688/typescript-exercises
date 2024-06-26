// Lernziel: Open Closed Principle anwenden

// - Erstelle eine Klasse namens IceCream, die verschiedene Eissorten repräsentiert.
// - Jede Eissorte hat eine Methode getDescription, die eine einfache Beschreibung der Eissorte zurückgibt (z.B., "Ich bin eine Vanille-Eiskugel.") und den jeweiligen Preis (2.2)
    
//     ```tsx
//     class IceCream {
//       getVanillaPrice(): number {
//       return 2.2;
//       }
      
//       getVanillaDescription(): string {
//         return "Ich bin eine Vanille-Eiskugel.";
//       }
    
//       getChocolateDescription(): string {
//         return "Ich bin eine Schokoladen-Eiskugel.";
//       }
//       ...
//      }
//     ```
    
// - Analysiere die IceCream-Klasse und identifiziere ihre Verantwortlichkeiten.
// - Überlege, wie die IceCream-Klasse verändert werden kann, um das Anlegen neuer Eissorten (wie Schokolade, Erdbeere, usw.) zu unterstützen, ohne den vorhandenen Code in IceCream zu ändern.
// - Verwende das Open-Closed Principle, um die IceCream-Klasse zu erweitern