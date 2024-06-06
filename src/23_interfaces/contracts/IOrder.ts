import IArticle from './IArticle';
import OrderStatus from './OrderStatus';

// * ein Interface ist ein Vertrag, bei dem sich z. B. Frontend- und Backendentwickler:innen darauf
// * einige, welche gemeinsamen Eigenschaften und Methoden eine bestimmte Klasse haben soll
// ? Interfaces werden mit dem Schlüsselwort interface angelegt, danach kommen geschweifte Klammern
// ? eine Konvention ist ein I vor den Namen zu stellen, damit man es direkt als Interface erkennt
// ? Interface-Definitionen immer in extra Dateien abgelegt
interface IOrder {
  // * Schreibweise (wie bei type) Eigenschaftsname : Datentyp;
  number: number;
  customerNumber: number;
  // ? ich kann auch ein Interface in der Typdefinition eines anderen verwenden
  articles: IArticle[];
  status: OrderStatus;
  description: string;

  // * Schreibweise (wie bei type): Methodennamen: () für Parameter => Rückgabedatentyp
  // ? cancel-Methode, die hat keine Parameter (leere runde Klammern) und die gibt ein boolean zurück
  // ? Logik: zum Stornieren - true, wenn Storno geklappt hat, false wenn es nicht möglich ist/fehlgeschlagen ist
  cancel: () => boolean;
}

export default IOrder;
