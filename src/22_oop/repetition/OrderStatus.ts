// * sollte immer in eine extra Datei
// ? fängt bei 0 an, die Listenelemente durchzunummerieren
enum OrderStatus {
  Angelegt,
  Verarbeitet,
  InAuslieferung,
  Geliefert,
  Storniert = 999
}
// ? ist immer gut, wenn ich nur eine Sache pro Datei
export default OrderStatus;

// * geht nicht: enum darf keinen numerischen Wert vorne haben
// enum OtherStatus {
//     999 = 'hallo'
// }
