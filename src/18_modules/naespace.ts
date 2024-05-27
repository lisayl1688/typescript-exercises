// * ich kann in TypeScript sog. Namespaces vergeben, d. h. benannte Namensräumen in denen Variablen, Funktionen etc. enthalten sind
// ? namespace Schlüssel vorne
// ? namespace, dann der Name, dann geschweifte Klammern
// ? in den geschweiften Klammern ist die gesamte Logik
export namespace Suppliers {
    export const totalNumber = 111;
  
    export function showBestSupplier() {
      console.log('Max Mustermann GmbH');
    }
  }
  
  export namespace Customers {
    export const totalNumber = 4320;
    export function showBestCustomer() {
      console.log('Erika Musterfrau');
    }
  }