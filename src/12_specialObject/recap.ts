

// ? Datentyp für einen Termin
type Appointment = { title: string; date: Date; isImportant: boolean };

const footballTraining: Appointment = {
  title: 'Training Alte Herren',
  date: new Date(),
  isImportant: false
};

const watchMovie: Appointment = {
  title: 'Planet der Affen anschauen',
  date: new Date(),
  isImportant: true
};

const appointmentsToday: Appointment[] = [footballTraining, watchMovie];
appointmentsToday.forEach((appointment: Appointment) => {
  console.log(appointment.title);
});

// ? Datentyp im Datentyp
// ? Typ Order (= Bestellung) soll eine Liste von Artikeln vom Typ Article haben
type Article = { number: number; name: string; quantity: number };
type Order = { id: string; customerNumber: number; articles: Article[] };

const article1: Article = {
  number: 122,
  name: 'Adidas Samba Größe 44',
  quantity: 1
};
const firstOrder: Order = {
  id: 'AD34343434',
  customerNumber: 3434334,
  articles: [article1]
};
console.log('Order customernumber: ', firstOrder.customerNumber);
console.log('Article name: ', firstOrder.articles[0].name);