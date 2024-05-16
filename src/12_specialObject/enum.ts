// * Datentyp wöchentliches Meeting mit Titel, Startdatum und Wochentag
type WeeklyMeeting = { title: string; startDate: Date; weekday: string };

// ? es gibt keine Vorgabe für die Schreibweise des Wochentags
// ? an verschiedenen Stellen im Code kann hier Verschiedenes stehen
const dailyMeeting: WeeklyMeeting = { title: 'Daily', startDate: new Date(), weekday: 'Montag' };
const dailyMeeting2: WeeklyMeeting = { title: 'Daily', startDate: new Date(), weekday: 'Monday' };
const dailyMeeting3: WeeklyMeeting = { title: 'Daily', startDate: new Date(), weekday: 'MO' };

const allMeetings: WeeklyMeeting[] = [dailyMeeting, dailyMeeting2, dailyMeeting3];
allMeetings.forEach((meeting: WeeklyMeeting) => {
  if (meeting.weekday === 'Montag' || meeting.weekday === 'MO' || meeting.weekday === 'Monday') {
    console.log('Meeting findet am Montag statt');
  }
});

// * Enum - eine vordefinierte Auflistung von Werten hinter denen Nummer stecken
// ? hier wollen wir Wochentage mit festen Bezeichnungen anlegen, die alle verwenden können
enum Weekday {
  Monday1,
  Tuesday1,
  Wednesday1,
  Thursday1,
  Friday1,
  Saturday1,
  Sunday1
}
console.log('Weekday Monday: ', Weekday.Monday1);

// ? der neue Typ WeeklyMeeting2 zwingt uns dazu als weekday einen Wert aus dem Weekday-Enum anzugeben
// ? damit haben wir einheitliche Werte für die Eigenschaft weekday
type WeeklyMeeting2 = { title: string; startDate: Date; weekday: Weekday };

const retroMeeting: WeeklyMeeting2 = {
  title: 'Retro',
  startDate: new Date(),
  weekday: Weekday.Thursday1
};
console.log('retroMeeting weekday: ', retroMeeting.weekday);

// ? auch für Statuswerte eignen sich Enums super
// ? wir haben einen Bestellstatus - eine Bestellung kann im Laufe der Abarbeitung verschiedene Werte annehmen
// ? beginnend bei Created = Angelegt bis hin zu Deleted = Gelöscht
enum OrderStatus {
  Created,
  Accepted,
  InProgress,
  InDelivery,
  Delivered,
  Cancelled,
  Deleted
}

// ? das Enum OrderStatus können wir jetzt in unserem Type Bestellung (ShopOrder) verwenden
// ? alle, die mit ShopOrder arbeiten, können jetzt nur sinnvolle Werte im Feld status angeben
type ShopOrder = { number: number; customerNumber: number; status: OrderStatus };
const order477: ShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.Created
};
console.log('Bestellung wurde angelegt. Status: ', order477.status);

order477.status = OrderStatus.Accepted;
// ? wir können auch auf die Bezeichnung, also hier das Wort "Accepted" (nicht die Zahl) zugreifen:
// ? das geht mit dem Index-Zugriff und dem Wert, der dahintersteckt -> bei Accepted ist das die 1
console.log('Bezeichnung von Orderstatus Accepted direkt: ', OrderStatus[1]);
console.log('Bezeichnung von Orderstatus Accepted über Variable: ', OrderStatus[order477.status]);

// ? wenn wir keine eigenen Werte angeben, wird bei einem Enum automatisch von 0 an durchnummeriert
// ? wir können aber auch eigene Wert vergeben, indem wir sie mit = dahinter schreiben
enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BADGATEWAY = 400,
  NOTFOUND = 404
}
console.log('HttpStatusCode not found: ', HttpStatusCode.NOTFOUND);